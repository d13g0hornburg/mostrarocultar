import React, { Component } from 'react';

// Define a classe MostrarOcultar que estende a classe Component do React
class App extends Component {
  // O construtor inicializa o estado e faz o bind do método alternarVisibilidade
  constructor(props) {
    super(props); // Chama o construtor da classe pai (Component)
    this.state = {
      visivel: false // Define o estado inicial, com a propriedade 'visivel' como false (texto oculto)
    };
    // Faz o bind do método alternarVisibilidade para que ele possa acessar o 'this' do componente
    this.alternarVisibilidade = this.alternarVisibilidade.bind(this);
  }

  // Método que alterna a visibilidade do texto
  alternarVisibilidade() {
    // Atualiza o estado: inverte o valor de 'visivel'
    this.setState(prevState => ({
      visivel: !prevState.visivel // Se 'visivel' for true, muda para false e vice-versa
    }));
  }

  // Método render que define o que será exibido na tela
  render() {
    return (
      <div>
        {/* Botão que chama o método alternarVisibilidade ao ser clicado */}
        <button onClick={this.alternarVisibilidade}>
          {/* O texto do botão muda conforme o estado: 'Mostrar Texto' ou 'Esconder Texto' */}
          {this.state.visivel ? 'Esconder' : 'Mostrar'} Texto
        </button>
        {/* O texto só é exibido se o estado 'visivel' for true */}
        {this.state.visivel && <p>Este é o texto que pode ser mostrado ou escondido.</p>}
      </div>
    );
  }
}

// Exporta o componente para que possa ser importado e usado em outros arquivos
export default App;
