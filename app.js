const clients = [...]; // Notre Data

// 1. On isole le Callback
const analyserVIP = (client) => {
  if (client.totalAchats > 1000) console.log("VIP: " + client.nom);
};

// 2. On exécute proprement
clients.forEach(analyserVIP);
