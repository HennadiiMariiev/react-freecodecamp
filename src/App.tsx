import { useEffect, useState } from 'react'
import reactLogo from './assets/react.svg'
import './App.css'
import Box from './layout/Box'
import IQuoteResponse from './interfaces/response';
import useFetchQuote from './hooks/useFetchQuote';
import Text from './components/Text';
import Author from './components/Author';
import ButtonsWrapper from './layout/ButtonsWrapper';
import Button from './components/Button';
import Skeleton from './components/Skeleton/Skeleton';

function App() {
  const { quote, isFetching, getQuote, error } = useFetchQuote();

  useEffect(() => {
    if (!quote) {
      getQuote();
    }
  }, [])

  const linkText = quote?.content + ' ' + (quote?.originator?.name ?? "");


  return (
    <Box>
      {isFetching ? <Skeleton /> : <Text quote={quote?.content} />}
      {isFetching ? <Skeleton height={20} isShort /> : <Author author={quote?.originator?.name} />}

      <ButtonsWrapper>
        <Button as='link' text="Tweet it" linkText={linkText} /> <Button onClick={getQuote} text="New quote" />
      </ButtonsWrapper>
    </Box>
  )
}

export default App
