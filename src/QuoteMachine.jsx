import { useState, useEffect } from 'react';

// Componente principal que representa a "máquina de citações"
function QuoteMachine() {
  // Lista de citações disponíveis
  const quotes = [
    { text: "O único lugar onde o sucesso vem antes do trabalho é no dicionário.", author: "Albert Einstein" },
    { text: "A vida é 10% o que acontece comigo e 90% como eu reajo a isso.", author: "Charles Swindoll" },
    { text: "O sucesso é ir de fracasso em fracasso sem perder entusiasmo.", author: "Winston Churchill" },
    { text: "Não espere por oportunidades, crie-as.", author: "George Bernard Shaw" },
    { text: "A melhor forma de prever o futuro é criá-lo.", author: "Peter Drucker" },
    { text: "Acredite que você pode e você já está no meio do caminho.", author: "Theodore Roosevelt" },
    { text: "Não importa quantos passos você deu para trás, o importante é quantos passos você vai dar para frente.", author: "Desconhecido" },
    { text: "A persistência é o caminho do êxito.", author: "Charles Chaplin" },
    { text: "Faça o que puder, com o que tiver, onde estiver.", author: "Theodore Roosevelt" },
    { text: "O pessimista vê dificuldade em cada oportunidade. O otimista vê oportunidade em cada dificuldade.", author: "Winston Churchill" },
    { text: "A coragem não é a ausência do medo, mas a vitória sobre ele.", author: "Nelson Mandela" },
    { text: "Se você quer alcançar a grandeza, pare de pedir permissão.", author: "Desconhecido" },
    { text: "A única maneira de fazer um excelente trabalho é amar o que você faz.", author: "Steve Jobs" },
    { text: "Não conte os dias, faça os dias contarem.", author: "Muhammad Ali" },
    { text: "O sucesso é a soma de pequenos esforços repetidos dia após dia.", author: "Robert Collier" },
  ];

  const colors = [
    '#16a085', '#27ae60', '#2c3e50', '#f39c12', '#e74c3c',
    '#9b59b6', '#FB6964', '#342224', '#472E32', '#BDBB99',
    '#77B1A9', '#73A857'
  ];

  const [color, setColor] = useState(colors[0]);

  // Função para gerar um índice aleatório baseado no tamanho do array
  const randomIndex = () => Math.floor(Math.random() * quotes.length);

  // Estado inicial com uma citação aleatória
  const [quote, setQuote] = useState(quotes[randomIndex()]);

  // Atualiza o fundo do body sempre que a cor mudar
  useEffect(() => {
    document.body.style.backgroundColor = color;
  }, [color]);

  // Função chamada ao clicar no botão — atualiza a citação com outra aleatória
  const getNewQuote = () => {
    const newQuote = quotes[randomIndex()];
    const newColor = colors[Math.floor(Math.random() * colors.length)];
    setQuote(newQuote);
    setColor(newColor);
  };

  // JSX que define a interface da máquina de citações
  return (
    <div
      id="quote-box"
      style={{
        boxShadow: '0 8px 16px rgba(0, 0, 0, 0.3)',
        border: '2px solid rgba(255, 255, 255, 0.3)',
        backgroundColor: color,
        color: '#fff',  // texto branco para contraste
        transition: 'background-color 1s ease, color 1s ease, box-shadow 1s ease, border-color 1s ease',
        padding: '20px',
        borderRadius: '10px',
        maxWidth: '600px',
        margin: '100px auto',
        textAlign: 'center',
      }}
    >
      <p id="text">"{quote.text}"</p>
      <h2 id="author">{quote.author}</h2>
      <button
        id="new-quote"
        onClick={getNewQuote}
        style={{
          backgroundColor: '#fff', // branco para o botão
          color: color,            // texto colorido
          borderColor: color,
          cursor: 'pointer',
          padding: '10px 20px',
          borderRadius: '5px',
          marginRight: '10px',
          transition: 'background-color 0.5s ease',
        }}
      >
        Nova citação
      </button>
      <a
        id="tweet-quote"
        href={`https://twitter.com/intent/tweet?text=${encodeURIComponent(
          quote.text + ' - ' + quote.author
        )}`}
        target="_blank"
        rel="noopener noreferrer"
        style={{
          color: '#fff',  // link visível em branco
          fontWeight: 'bold',
          textDecoration: 'none',
          transition: 'color 0.5s ease',
        }}
      >
        Tweetar
      </a>
      {/* Aqui vem a assinatura */}
  <p style={{
    marginTop: '30px',
    fontSize: '0.8rem',
    
    color: 'rgba(255,255,255,0.7)',
    fontStyle: 'italic',
  }}>
    by DevEyer
  </p>
    </div>
  );
}

export default QuoteMachine;
