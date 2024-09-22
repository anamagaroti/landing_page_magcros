import React from 'react';
import './index.css';
import Rodape from './components/rodape';
import Header from './components/cabecalho';
import Apresentacao from './pages/apresentacao';
import Garantia from './pages/garantia';
import Produtos from './pages/produto';
import Sobre from './pages/sobre';
import Faq from './pages/faq';

function App() {
  return (
    <div className="App">
     <Header/>
      <main>
       <Apresentacao/>
       <Produtos/>
       <Garantia/>
       <Sobre/>
       <Faq/>
       
      </main>
      <Rodape/>
    </div>
  );
}

export default App;
