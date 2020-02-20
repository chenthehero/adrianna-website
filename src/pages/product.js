import React from "react"
import Header from "../components/header"
import Layout from "../components/layout"

const ProductPage = () =>(
  <Layout>
    <Header headerText="Product/UX Design"/>
    <div class="container">
        <div class="d-flex flex-row">
          <div class="col-md text-center">
            Yeti Daybreak
          </div>
          <div class="col-6 text-center">
            Milo - Smart Medication Management
          </div>
        </div>

        <div class="d-flex flex-row">
            <div class="col-md text-center">
              Spring 2019
            </div>
            <div class="col-6 text-center">
              Autumn 2018 - Spring 2019
            </div>
        </div>
    </div>
  </Layout>
)


export default ProductPage