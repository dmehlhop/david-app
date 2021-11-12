import React, { useState } from "react";
import ContextProvider from './context';
import MoshTemps from './moshTemps'

const MoshTempsContext = () => {
  const data = {temps:"99.3º, 96.5º, 99.9º, 99.1º, 98.4º, 7.4º"}

  return (
    <ContextProvider value={data}>
        <MoshTemps/>
    </ContextProvider>
  )
}

export default MoshTempsContext
