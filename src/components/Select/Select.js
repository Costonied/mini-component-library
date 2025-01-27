import React from 'react';
import styled from 'styled-components';

import { COLORS } from '../../constants';
import Icon from '../Icon';
import { getDisplayedValue } from './Select.helpers';

const Select = ({ id, value, onChange, children }) => {
  const displayedValue = getDisplayedValue(value, children);

  return (
      <Wrapper>
        <NativeSelect id={id} value={value} onChange={onChange}>
          {children}
        </NativeSelect>
        <PresentationalBit>
          {displayedValue}
          <IconWrapper style={{ '--size': 24 + 'px' }}>
            <Icon id="chevron-down" strokeWidth={1} size={24} />
          </IconWrapper>
        </PresentationalBit>
      </Wrapper>
  );
};

const Wrapper = styled.div`
  position: relative;
  width: 200px;
  // Если оставить max-content, то ширина будет динамически меняться в зависимости от выбранного элемента списка.
  // Понимаю, что хардкодить длину в 200px не корректно, но для данного примера оставлю так, потому 
  // что max-content меня бесит больше чем 200px 😇 тут нужен другой подход вычисления нужной длины 
  // или использовать скрытие хвоста торчащего элемента
  //width: max-content;
`;

const NativeSelect = styled.select`
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  opacity: 0;
  /* Allow the select to span the full height in Safari */
  -webkit-appearance: none;
`;

const PresentationalBit = styled.div`
  color: ${COLORS.gray700};
  background-color: ${COLORS.transparentGray15};
  font-size: ${16 / 16}rem;
  padding: 12px 16px;
  padding-right: 52px;
  border-radius: 8px;

  ${NativeSelect}:focus + & {
    outline: 1px dotted #212121;
    outline: 5px auto -webkit-focus-ring-color;
  }

  ${NativeSelect}:hover + & {
    color: ${COLORS.black};
  }
`;

const IconWrapper = styled.div`
  position: absolute;
  top: 0;
  bottom: 0;
  right: 10px;
  margin: auto;
  width: var(--size);
  height: var(--size);
  pointer-events: none;
`;

export default Select;