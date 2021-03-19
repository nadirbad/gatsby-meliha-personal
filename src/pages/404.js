import React from "react"
import { Link } from "gatsby"
import {RiArrowLeftSLine, RiBugLine, RiSkullLine} from "react-icons/ri"

import SEO from "../components/seo"
import Layout from "../components/layout"

const NotFound = () => (
  <Layout className="not-found-page">
    <SEO title="Page not found"/>
    <div className="wrapper" style={{
      textAlign: "center"
    }}>
      <header>
        <RiSkullLine style={{
          fontSize: "128px",
          color: "var(--primary-color)"
        }}/>
        <h1>Ups, nismo očekivali da će se to dogoditi</h1>
        <p>Dopustite nam da vam pomognemo, pogledajte dolje navedene mogućnosti</p>
      </header>
      <Link to="/" className="button"><RiArrowLeftSLine className="icon -left"/>Povratak na Početnu</Link>
      <Link to="/kontakt" className="button -outline">Prijavi ovo <RiBugLine className="icon -right"/></Link>
    </div>
  </Layout>
)

export default NotFound