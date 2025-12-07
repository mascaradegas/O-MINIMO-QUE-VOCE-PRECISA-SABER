import React from 'react';
import styles from '../styles/Profile.module.css';

const HomePageContent = () => {
    return (
        <main className="page">
    
    <section className="hero">
      <div>
        <div className="hero-badge-row">
          <div className="hero-badge">
            <span>🧳</span> Para quem acabou de chegar nos EUA
          </div>
          <div className="hero-badge">
            <span>🎧</span> Curso em vídeo 100% online
          </div>
        </div>
        <h1 className="hero-title">
          O mínimo que você precisa pra <span>se virar nos EUA</span>.
        </h1>
        <p className="hero-subtitle">
          Não é sobre falar inglês perfeito. É sobre conseguir comer, trabalhar,
          pagar conta, pedir ajuda e viver sozinho em outro país.
        </p>
        <p className="hero-subtitle hero-subtitle-strong">
          Em vez de decorar gramática, você aprende a funcionar numa nova maneira de pensar.
        </p>

        <div className="hero-ctas">
          <a
            className="btn btn-primary"
            href="#formulario"
          >
            🚀 Preencher formulário rápido
          </a>
          <a
            className="btn btn-ghost"
            href="#modulos"
          >
            Ver tudo o que você vai aprender
          </a>
        </div>

        <div className="hero-guarantee">
          <span>✅</span>
          <span>Acesso vitalício • 108 vídeo aulas práticas • Explicado em português</span>
        </div>
      </div>

      
      <aside className="hero-side-card" id="formulario">
        <div className="hero-side-tag">Resposta em poucas horas</div>
        <div className="hero-side-title">Aplicar para a próxima turma</div>
        <p className="hero-side-text">
          Preenche rapidinho e eu te respondo <strong>direto no WhatsApp</strong> com os valores,
          horários e a melhor opção pra sua realidade.
        </p>

        <form id="leadForm" className="lead-form">
          <div className="lead-form-grid lead-form-grid-2">
            <div className="lead-field">
              <label htmlFor="nome" className="lead-label">Nome completo</label>
              <input
                id="nome"
                name="nome"
                type="text"
                className="lead-input"
                placeholder="Seu nome"
                required
              />
            </div>
            <div className="lead-field">
              <label htmlFor="cidade" className="lead-label">Cidade / Estado</label>
              <input
                id="cidade"
                name="cidade"
                type="text"
                className="lead-input"
                placeholder="Ex: Boston, MA"
                required
              />
            </div>
          </div>

          <div className="lead-form-grid lead-form-grid-2">
            <div className="lead-field">
              <label htmlFor="whatsapp" className="lead-label">WhatsApp (com DDI)</label>
              <input
                id="whatsapp"
                name="whatsapp"
                type="tel"
                className="lead-input"
                placeholder="+1 857 000 0000"
                required
              />
              <div className="lead-help">É por aqui que vou falar com você primeiro.</div>
            </div>
            <div className="lead-field">
              <label htmlFor="nivel" className="lead-label">Seu nível de inglês</label>
              <select id="nivel" name="nivel" className="lead-select" required>
                <option value="">Selecione</option>
                <option>Começando do zero</option>
                <option>Sei algumas frases</option>
                <option>Consigo me virar mais ou menos</option>
                <option>Já falo, mas quero destravar</option>
              </select>
            </div>
          </div>

          <div className="lead-form-grid lead-form-grid-2">
            <div className="lead-field">
              <label htmlFor="objetivo" className="lead-label">Principal objetivo</label>
              <select id="objetivo" name="objetivo" className="lead-select" required>
                <option value="">Selecione</option>
                <option>Trabalho / ganhar mais</option>
                <option>Sobreviver no dia a dia</option>
                <option>Imigração / entrevista</option>
                <option>Viagem / turismo</option>
                <option>Outro</option>
              </select>
            </div>
            <div className="lead-field">
              <label htmlFor="horario" className="lead-label">Melhor horário pra estudar</label>
              <select id="horario" name="horario" className="lead-select" required>
                <option value="">Selecione</option>
                <option>Manhã</option>
                <option>Tarde</option>
                <option>Noite</option>
                <option>Fim de semana</option>
              </select>
            </div>
          </div>

          <div className="lead-form-grid">
            <div className="lead-field">
              <label htmlFor="mensagem" className="lead-label">Me conta rapidinho sua situação</label>
              <textarea
                id="mensagem"
                name="mensagem"
                className="lead-textarea"
                placeholder="Ex: Moro nos EUA, trabalho na construção e preciso de inglês pra crescer no trabalho."
              ></textarea>
              <div className="lead-help">
                Pode escrever em português mesmo.
              </div>
            </div>
          </div>

          <div id="leadError" className="lead-error">
            Preenche os campos obrigatórios antes de enviar. 🙏
          </div>

          <button type="submit" className="btn btn-primary lead-submit">
            💬 Enviar dados e falar no WhatsApp
          </button>

          <div className="lead-legal">
            Ao enviar, você concorda em receber contato por WhatsApp e e-mail sobre o curso.
            Você pode parar quando quiser.
          </div>
        </form>

        <div className="hero-side-footer">
          <span className="muted">Se eu estiver em aula, respondo assim que sair.</span>
          <div className="dot-row">
            <div className="dot active"></div>
            <div className="dot"></div>
            <div className="dot"></div>
          </div>
        </div>
      </aside>
    </section>

    
    <section id="sobre">
      <div className="section-header">
        <div className="section-eyebrow">O que você vai aprender</div>
        <h2 className="section-title">Inglês que paga boleto, não prova de proficiência</h2>
        <p className="section-subtitle">
          Aqui não tem vocabulário “fancy” nem inglês de escritório. É o inglês que você usa
          todo dia pra viver sozinho nos Estados Unidos.
        </p>
      </div>

      <div className="split">
        <div>
          <ul className="check-list">
            <li>
              <span className="check-ico">🍽️</span>
              <span>Comer em qualquer lugar – restaurante, café, fast food, mercado, feira.</span>
            </li>
            <li>
              <span className="check-ico">💼</span>
              <span>Trabalhar com segurança em limpeza, construção, cozinha, entrega, fábrica.</span>
            </li>
            <li>
              <span className="check-ico">💳</span>
              <span>Pagar contas, resolver banco, entender preços, gorjetas e não ser passado pra trás.</span>
            </li>
            <li>
              <span className="check-ico">🧭</span>
              <span>Pedir e dar direções, usar GPS, se virar em qualquer lugar da cidade.</span>
            </li>
            <li>
              <span className="check-ico">🆘</span>
              <span>Resolver emergências – médico, farmácia, hospital, chamar ajuda.</span>
            </li>
            <li>
              <span className="check-ico">🤝</span>
              <span>Fazer amigos, conversar com americanos, falar de sentimentos, hobbies, dia a dia.</span>
            </li>
          </ul>
        </div>

        <div className="card card-ghost">
          <div className="card-title">Resumo do curso em números</div>
          <div className="card-text">
            • <span className="highlight">108 vídeo aulas práticas</span><br />
            • Acesso vitalício – estude no seu ritmo<br />
            • Explicações em português, frases em inglês prontas pra uso<br />
            • Cenários reais: aeroporto, trabalho, mercado, rua, restaurante e muito mais
          </div>
          <div className="pill-row">
            <div className="pill-soft">🎧 100% online</div>
            <div className="pill-soft">📱 Assista do celular</div>
            <div className="pill-soft">🗣️ Foco em fala</div>
            <div className="pill-soft">🇧🇷 Pensado pra brasileiro</div>
          </div>
        </div>
      </div>
    </section>


    <section id="como-funciona">
      <div className="section-header">
        <div className="section-eyebrow">Como funciona na prática</div>
        <h2 className="section-title">Direto ao ponto: você aprende, aplica e repete</h2>
        <p className="section-subtitle">
          Nada de teoria infinita. Cada aula é um cenário real com frases que você usa na vida
          real já na próxima vez que sair de casa.
        </p>
      </div>

      <div className="split">
        <div className="card">
          <div className="card-title">Como funciona:</div>
          <ul className="check-list" style={{marginTop: "6px"}}>
            <li>
              <span className="check-ico">🎥</span>
              <span><strong>108 vídeo aulas práticas</strong> – cada uma focada em uma situação real.</span>
            </li>
            <li>
              <span className="check-ico">♾️</span>
              <span><strong>Acesso vitalício</strong> – você pode rever sempre que precisar.</span>
            </li>
            <li>
              <span className="check-ico">🇧🇷</span>
              <span><strong>Explicado em português</strong> – pra você entender rápido e sem rodeios.</span>
            </li>
            <li>
              <span className="check-ico">🗣️</span>
              <span><strong>Foco em frases que funcionam</strong> – não em regras de gramática.</span>
            </li>
            <li>
              <span className="check-ico">🌎</span>
              <span><strong>Cenários reais</strong> – aeroporto, trabalho, mercado, rua, restaurante e muito mais.</span>
            </li>
          </ul>
        </div>

        <div className="card">
          <div className="card-title">Pra quem é esse curso:</div>
          <ul className="tag-list" style={{ marginTop: "6px"}}>
            <li>
              <span className="check-ico">✅</span>
              <span>Você acabou de chegar (ou vai chegar) nos EUA.</span>
            </li>
            <li>
              <span className="check-ico">✅</span>
              <span>Você trabalha com limpeza, construção, cozinha, entrega ou fábrica.</span>
            </li>
            <li>
              <span className="check-ico">✅</span>
              <span>Você até entende inglês, mas trava na hora de falar.</span>
            </li>
            <li>
              <span className="check-ico">✅</span>
              <span>Você quer autonomia – viver sem depender de tradutor ou amigo bilíngue.</span>
            </li>
            <li>
              <span className="check-ico">✅</span>
              <span>Você não tem anos pra estudar – precisa funcionar <strong>agora</strong>.</span>
            </li>
          </ul>
        </div>
      </div>
    </section>

    <section id="resultado">
      <div className="section-header">
        <div className="section-eyebrow">Seja honesto com você</div>
        <h2 className="section-title">Esse curso não é pra todo mundo (e tá tudo bem)</h2>
        <p className="section-subtitle">
          Ele foi feito pra quem quer usar inglês na vida real – não pra colecionar certificado.
        </p>
      </div>

      <div className="columns-2">
        <div className="card card-ghost">
          <div className="card-title">Pra quem NÃO é:</div>
          <ul className="bad-list" style={{marginTop: "6px"}}>
            <li>
              <span className="bad-ico">❌</span>
              <span>Você quer inglês acadêmico ou focado em prova de proficiência.</span>
            </li>
            <li>
              <span className="bad-ico">❌</span>
              <span>Você quer impressionar os outros com vocabulário sofisticado.</span>
            </li>
            <li>
              <span className="bad-ico">❌</span>
              <span>Você não está disposto a praticar na vida real.</span>
            </li>
          </ul>
        </div>

        <div className="card">
          <div className="card-title">Depois dessas 108 aulas, você vai:</div>
          <ul className="result-list" style={{ marginTop: "6px" }}>
            <li>
              <span className="result-ico">✅</span>
              <span>Sair de casa sozinho e resolver tudo o que precisa.</span>
            </li>
            <li>
              <span className="result-ico">✅</span>
              <span>Entender exatamente o que o seu chefe quer de você.</span>
            </li>
            <li>
              <span className="result-ico">✅</span>
              <span>Pedir comida sem medo de errar ou travar.</span>
            </li>
            <li>
              <span className="result-ico">✅</span>
              <span>Pagar contas sem ser enganado por falta de inglês.</span>
            </li>
            <li>
              <span className="result-ico">✅</span>
              <span>Pegar transporte sozinho – ônibus, metrô, avião, carro alugado.</span>
            </li>
            <li>
              <span className="result-ico">✅</span>
              <span>Fazer amigos, conversar, conhecer americanos.</span>
            </li>
            <li>
              <span className="result-ico">✅</span>
              <span>Resolver emergências com calma, sem pânico na hora de explicar.</span>
            </li>
            <li>
              <span className="result-ico">✅</span>
              <span>Parar de só sobreviver e <strong>começar a viver</strong> nos EUA.</span>
            </li>
          </ul>
        </div>
      </div>
    </section>

    <section id="cta-final" className="cta-final">
      <h2>Pronto pra parar de depender dos outros pra tudo nos EUA?</h2>
      <p>
        Se você quer autonomia pra viver nos Estados Unidos – trabalhar, comer, se virar
        em emergência, falar com as pessoas e resolver a própria vida – esse curso foi
        feito pra você.
      </p>
      <div className="hero-ctas" style={{ justifyContent: "center", marginTop: "10px" }}>
        <a
          className="btn btn-primary"
          href="#formulario"
        >
          🔐 Garantir acesso preenchendo o formulário
        </a>
        <a
          className="btn btn-ghost"
          href="#modulos"
        >
          Ver os módulos antes de decidir
        </a>
      </div>
      <div className="cta-small">
        Você tem acesso vitalício. Estude no seu tempo, revise quando quiser e leve o curso com você
        em qualquer mudança, cidade ou estado.
      </div>
    </section>

  </main>
    );
};

export default HomePageContent;