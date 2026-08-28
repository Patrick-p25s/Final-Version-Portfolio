import { useEffect, useState } from "react";

// Structure d'un message selon votre API
interface Message {
  id: number | string;
  sender_name: string;
  raison: string;
  message_content: string;
  is_read: boolean;
  create_at?: string;
}

export function Dashboard() {
  const [messages, setMessages] = useState<Message[]>([]);
  const [loading, setLoading] = useState<boolean>(true);
  const [error, setError] = useState<string>("");

  useEffect(() => {
    const fetchReadMessages = async () => {
      const token = localStorage.getItem("TOKEN");

      // Vérification rapide du token avant d'envoyer la requête
      if (!token) {
        window.location.href = "/login";
        return;
      }

      const API_URL = import.meta.env.VITE_API_URL || "http://localhost:8000";

      try {
        const response = await fetch(`${API_URL}/message`, {
          method: "GET",
          headers: {
            "Content-Type": "application/json",
            Accept: "application/json",
            Authorization: `Bearer ${token}`, // Transmission du token de sécurité
          },
        });

        // Gestion de l'expiration ou de la non-validité du token
        if (response.status === 401) {
          localStorage.removeItem("TOKEN");
          window.location.href = "/login";
          return;
        }

        if (!response.ok) {
          throw new Error("Erreur lors de la récupération des messages.");
        }

        const data: Message[] = await response.json();

        // Sécurité côté client : s'assure d'afficher uniquement les messages lus
        setMessages(data);
      } catch (err: unknown) {
        if (err instanceof Error) {
          setError(err.message);
        } else {
          setError("Impossible de charger les données.");
        }
      } finally {
        setLoading(false);
      }
    };

    fetchReadMessages();
  }, []);

  const handleLogout = () => {
    localStorage.removeItem("TOKEN");
    window.location.href = "/login";
  };

  if (loading) {
    return <p style={{ padding: "20px" }}>Chargement des messages lus...</p>;
  }
  console.log(messages);
  return (
    <div style={{ padding: 30 }}>
      <div className="back-header">
        <h2>Backoffice - Messages lus ({messages.length})</h2>
        <button
          onClick={handleLogout}
          style={{ padding: "10px", cursor: "pointer" }}
        >
          Se déconnecter
        </button>
      </div>

      {error && <p style={{ color: "red" }}>{error}</p>}

      {messages.length === 0 ? (
        <p>Aucun message marqué comme lu.</p>
      ) : (
        <div className="message-grid">
          {messages.map((msg) => (
            <div key={msg.id} className="education-card">
              {msg.create_at && (
                <span>{new Date(msg.create_at).toLocaleDateString()}</span>
              )}
              <h3>{msg.sender_name}</h3>
              <h4>{msg.raison}</h4>
              <p>{msg.message_content}</p>
            </div>
          ))}
        </div>
      )}
    </div>
  );
}
