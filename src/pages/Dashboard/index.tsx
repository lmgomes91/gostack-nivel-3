import React from 'react';
import { Title, Form, Repositories } from './styles';
import { FiChevronRight } from 'react-icons/fi';

import logoImg from '../../assets/logo.svg';

const Dashboard: React.FC = () => {
  return (
    <>
      <img src={logoImg} alt="Github Explorer" />
      <Title>Exolore repositórios no Github</Title>
      <Form>
        <input placeholder="Digite o nome do repositório" />
        <button type="submit">Pesquisar</button>
      </Form>

      <Repositories>
        <a href="teste">
          <img
            src="https://avatars0.githubusercontent.com/u/20844810?s=460&u=0442f6352b10e715273e4b0394161b92348aaab5&v=4"
            alt="Lucas Gomes"
          />
          <div>
            <strong>Nome do repositório</strong>
            <p>Descrição do repositório</p>
          </div>
          <FiChevronRight size={20} />
        </a>

        <a href="teste">
          <img
            src="https://avatars0.githubusercontent.com/u/20844810?s=460&u=0442f6352b10e715273e4b0394161b92348aaab5&v=4"
            alt="Lucas Gomes"
          />
          <div>
            <strong>Nome do repositório</strong>
            <p>Descrição do repositório</p>
          </div>
          <FiChevronRight size={20} />
        </a>

        <a href="teste">
          <img
            src="https://avatars0.githubusercontent.com/u/20844810?s=460&u=0442f6352b10e715273e4b0394161b92348aaab5&v=4"
            alt="Lucas Gomes"
          />
          <div>
            <strong>Nome do repositório</strong>
            <p>Descrição do repositório</p>
          </div>
          <FiChevronRight size={20} />
        </a>
      </Repositories>
    </>
  );
};

export default Dashboard;
