import React from 'react'
import { Header } from '../components/Header/Header'
import { FileStructure } from '../components/FileStructure/FileStructure'
import { Footer } from '../components/Footer/Footer'
import './DefaultPage.css'

export const DefaultPage = () => {
  return (
    <>
      <Header />
      <main className="main">
        <article className="main__article"></article>
        <FileStructure />
      </main>
      <Footer />
    </>
  )
}