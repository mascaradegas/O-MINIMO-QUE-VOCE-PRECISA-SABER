document.getElementById("year").textContent = new Date().getFullYear();

    // === CONFIGURA O NÚMERO DO WHATSAPP AQUI ===
    // Somente dígitos, com DDI. Ex: Brasil: 5599999999999 | EUA: 17815551234
    const WHATSAPP_NUMERO = "5599999999999"; // TROCAR PELO SEU NÚMERO

    const leadForm = document.getElementById("leadForm");
    const leadError = document.getElementById("leadError");

    if (leadForm) {
      leadForm.addEventListener("submit", function (e) {
        e.preventDefault();
        leadError.style.display = "none";

        const nome = document.getElementById("nome").value.trim();
        const cidade = document.getElementById("cidade").value.trim();
        const whatsapp = document.getElementById("whatsapp").value.trim();
        const nivel = document.getElementById("nivel").value;
        const objetivo = document.getElementById("objetivo").value;
        const horario = document.getElementById("horario").value;
        const mensagem = document.getElementById("mensagem").value.trim();

        if (!nome || !cidade || !whatsapp || !nivel || !objetivo || !horario) {
          leadError.style.display = "block";
          return;
        }

        const texto = `
Novo lead para o curso *O Mínimo pra se Virar nos EUA* 🚀

👤 Nome: ${nome}
📍 Cidade/Estado: ${cidade}
📱 WhatsApp do aluno: ${whatsapp}

🇺🇸 Nível de inglês: ${nivel}
🎯 Objetivo principal: ${objetivo}
⏰ Melhor horário pra estudar: ${horario}

📝 Situação atual:
${mensagem || "Não escreveu nada aqui."}
        `.trim();

        const encoded = encodeURIComponent(texto);
        const url = `https://wa.me/${WHATSAPP_NUMERO}?text=${encoded}`;

        window.open(url, "_blank");
      });
    }