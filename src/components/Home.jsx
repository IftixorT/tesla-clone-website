import React from 'react'
import Section from './Section'

const Home = () => {
    return (
        <div>
            <Section
                title="Model S"
                description="Order Online for Touchless Delivery"
                backgroundImg="ms-homepage-desktop.jpg"
                leftBtnText="Custom Order"
                RightBtnText="Existing Inventory"
            />
            <Section
                title="Model Y"
                description="Order Online for Touchless Delivery"
                backgroundImg="Desktop-ModelY.jpg"
                leftBtnText="Custom Order"
                RightBtnText="Existing Inventory"
            />
            <Section
                title="Model 3"
                description="Order Online for Touchless Delivery"
                backgroundImg="m3-homepage-desktop.jpg"
                leftBtnText="Custom Order"
                RightBtnText="Existing Inventory"
            />
            <Section
                title="Model X"
                description="Order Online for Touchless Delivery"
                backgroundImg="mx-homepage-desktop.jpg"
                leftBtnText="Custom Order"
                RightBtnText="Existing Inventory"
            />
            <Section
                title="Lowest Cost Solar Panels in America"
                description="Money-back guarantee"
                backgroundImg="us_homepage_sp_hero_d.jpg"
                leftBtnText="Custom Order"
                RightBtnText="Existing Inventory"
            />
            <Section
                
                title="Solar for New Roofs"
                description="Solar Roof Costs Less Than a New Roof Plus Solar Panels"
                backgroundImg="solar-roof-hero-desktop.jpg"
                leftBtnText="Custom Order"
                RightBtnText="Existing Inventory"
            />
        </div>
    )
}

export default Home
