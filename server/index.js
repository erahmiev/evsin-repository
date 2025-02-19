import express from "express";
import { Server } from "socket.io";
import path from "path";
import { fileURLToPath } from "url";

const __dateiname = fileURLToPath(import.meta.url);
const __verzname = path.dirname(__dateiname);

const PORT = process.env.PORT || 3500;
const ADMIN = "Admin";

const app = express();
app.use(express.static(path.join(__verzname, "public")));

const expressServer = app.listen(PORT, () => {
  console.log(`lauschen auf Port ${PORT}`);
});

// STATE
const TeilnehmerState = {
  teilnehmer: [],
  teilnehmerSetzen: function (neueTeilnehmerArray) {
    this.teilnehmer = neueTeilnehmerArray;
  },
};

const io = new Server(expressServer, {
  cors: {
    origin:
      process.env.NODE_ENV === "production"
        ? false
        : ["http://localhost:5500", "http://127.0.0.1:5500"],
  },
});

io.on("connection", (socket) => {
  console.log(`Teilnehmer ${socket.id} ist beigetreten`);

  //BEI BEITRITT - nur zum Teilnehmer
  socket.emit("nachricht", nachrichtBauen(ADMIN, "Willkommen zu LexiCode!"));
  socket.on("raumBeitreten", ({ name, raum }) => {
    const vorhRaum = teilnehmerHolen(socket.id)?.room;
    if (vorhRaum) {
      socket.leave(vorhRaum);
      io.to(vorhRaum).emit(
        "nachricht",
        nachrichtBauen(ADMIN, `${name} hat den Raum verlassen`)
      );
      const teilnehmer = teilnehmerAktivieren(socket.id, name, raum);

      //   Liste der Teilnehmer aus vorherigem Raum kann nicht aktualisiert werden, bis der State in teilnehmerAktivieren aktualisiert wurde

      if (vorhRaum) {
        io.to(vorhRaum).emit("teilnehmerListe", {
          teilnehmer: teilnehmerInRaumHolen(vorhRaum),
        });
      }

      //Raum beitreten
      socket.join(teilnehmer.raum);

      //An beigetretene Teilnehmer
      socket.emit(
        "nachricht",
        nachrichtBauen(
          ADMIN,
          `Du bist dem Chatraum ${teilnehmer.raum} beigetreten`
        )
      );

      //An allen anderen
      socket.broadcast
        .to(teilnehmer.raum)
        .emit(
          "nachricht",
          nachrichtBauen(
            ADMIN,
            `${teilnehmer.name} ist dem Chatraum beigetreten`
          )
        );
      // Teilnehmerliste für Raum aktualisieren
      io.to(teilnehmer.raum).emit("teilnehmerListe", {
        teilnehmer: teilnehmerInRaumHolen(teilnehmer.raum),
      });

      //   Raumliste für alle aktualisieren
      io.emit("raumListe", {
        roeme: alleAktiveRoemeHolen(),
      });
    }
  });
});

//Wenn Teilnehmer sich trennt - an allen anderen
socket.on("disconnect", () => {
  const teilnehmer = teilnehmerHolen(socket.id);
  teilnehmerVerlässtApp(socket.id);

  if (teilnehmer) {
    io.to(teilnehmer.raum).emit(
      "nachricht",
      nachrichtBauen(ADMIN, `${teilnehmer.name} hat den Raum verlassen`)
    );
    io.to(teilnehmer.raum).emit("teilnehmerListe", {
      teilnehmer: teilnehmerInRaumHolen(teilnehmer.raum),
    });
  }
  console.log(`Teilnehmer ${socket.id} getrennt`);
});

//Auf Nachrichten-Event lauschen
function nachrichtBauen(name, text) {
  return {
    name,
    text,
    time: new Intl.DateTimeFormat("default", {
      hour: "numeric",
      minute: "numeric",
      second: "numeric",
    }).format(new Date()),
  };
}

// Teilnehmer Funktionen
function teilnehmerAktivieren(id, name, raum) {
  const user = { id, name, raum };
  TeilnehmerState.teilnehmerSetzen([
    ...TeilnehmerState.teilnehmer.filter((teilnehmer) => teilnehmer.id !== id),
    teilnehmer,
  ]);
  return teilnehmer;
}

function teilnehmerVerlässtApp(id) {
  TeilnehmerState.teilnehmerSetzen(
    TeilnehmerState.users.filter((teilnehmer) => teilnehmer.id !== id)
  );
}

function teilnehmerHolen(id) {
  return TeilnehmerState.teilnehmer.find((teilnehmer) => teilnehmer.id !== id);
}

function teilnehmerInRaumHolen(raum) {
  return TeilnehmerState.teilnehmer.filter(
    (teilnehmer) => teilnehmer.raum === raum
  );
}

function alleAktiveRoemeHolen() {
  return Array.from(
    new Set(TeilnehmerState.teilnehmer.map((teilnehmer) => teilnehmer.raum))
  );
}
