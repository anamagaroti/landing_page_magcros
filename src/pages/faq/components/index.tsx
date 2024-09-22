import React, { useState } from 'react';
import './style.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faChevronDown, faChevronUp } from '@fortawesome/free-solid-svg-icons';

interface AccordionProps {
  pergunta: string;
  resposta: string;
}

const Accordion: React.FC<AccordionProps> = (props) => {
  const { pergunta, resposta } = props;

  const [isOpen, setIsOpen] = useState(false);

  const toggleAccordion = () => {
    setIsOpen(!isOpen);
  };

  return (
    <div className='body-components-pergunta'>
      <div onClick={toggleAccordion} className='pergunta'>
        <p>{pergunta}</p> 
        {
          !isOpen ? (
            <FontAwesomeIcon icon={faChevronDown} />
          ) : (
            <FontAwesomeIcon icon={faChevronUp} />
          )
        }
      </div>
      {isOpen && (
        <div className='resposta'>
          <p>{resposta}</p>
        </div>
      )}

    </div>
  );
};

export default Accordion;
