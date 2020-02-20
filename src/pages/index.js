import React from "react"
import {Link} from "gatsby"
import Header from "../components/header"
import Layout from "../components/layout"

/**
 * Adds Jumbotron, Featured Products, and About Me
 */
export default () => (
  <Layout>
    <div class="jumbotron jumbotron-fluid">
        <div class="container">
            <h1 class="display-3">Hi, I’m Adrianna.</h1>
            <p class="lead">I am a product designer, user advocate, and innovator. I am currently working as a UX Designer in the healthcare space, at ScriptHero. I hope you enjoy my work!
            </p>
            <hr class="my-2"/>
        </div>
    </div>

    
    <div class="container">
        <div class="d-flex flex-row">
          <div class="col-md text-center">
            Yeti Daybreak
          </div>
          <div class="col-6 text-center">
            Milo - Smart Medication Management
          </div>
          <div class="col-md text-center">
            Cordless Drill
          </div>
        </div>

        <div class="d-flex flex-row">
            <div class="col-md text-center">
              Spring 2019
            </div>
            <div class="col-6 text-center">
              Autumn 2018 - Spring 2019
            </div>
            <div class="col-md text-center">
              Spring 2017
            </div>
          </div>
      </div>

    
  </Layout>
)