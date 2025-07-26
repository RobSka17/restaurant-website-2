import './template.css'
import tablesImage from '../assets/dinner-tables.jpg'
import pastaImage from '../assets/making-pasta.jpg'
import pizzaImage from '../assets/pizza.jpg'
import beerImage from '../assets/pouring-beer.jpg'
import barrelsImage from '../assets/barrels.jpg'
import sandwichImage from '../assets/sandwich.jpg'
import cakeImage from '../assets/cake.jpg'
import logoImage from '../assets/restaurant-logo.png'
import { useEffect, useReducer } from 'react'
import { Constants } from '../constants'
import { NavMenu } from '../nav-menu/nav-menu'

export const Template = ({ props, children }) => {
    const {
        heading
    } = props

    const initialState = {
        backgroundImage: 0
    }
    const [state, dispatch] = useReducer(rootReducer, initialState)

    function rootReducer(state, action) {
        const reducerMap = new Map([
            [Constants.ReducerKeys.UpdateBackgroundImage, onUpdateBackgroundImage]
        ])
        const reducer = reducerMap.get(action.type)
        return reducer(state, action)
    }

    function onUpdateBackgroundImage(state, action) {
        const {
            backgroundImage
        } = action.payload

        return {
            ...state,
            backgroundImage
        }
    }

    useEffect(() => {
        cycleBackgroundImage()
    }, [state.backgroundImage])

    const backgroundImages = [
        tablesImage,
        pastaImage,
        pizzaImage,
        beerImage,
        barrelsImage,
        sandwichImage,
        cakeImage
    ]

    function cycleBackgroundImage() {
        setTimeout(() => {
            updateBackgroundImage()
        }, 8000)
        
    }

    function updateBackgroundImage() {
        const backgroundImage = state.backgroundImage < backgroundImages.length - 1 ?
        state.backgroundImage + 1 : 0

        dispatch({
            type: Constants.ReducerKeys.UpdateBackgroundImage,
            payload: { backgroundImage }
        })
    }

    const backgroundImage = backgroundImages[state.backgroundImage]

    return (
        <>
            <div data-testid={'template'} className={'Template'}>
                <img className={'BackgroundImage'} src={backgroundImage} />
                <div className={'LeftMenu'}>
                    <img className={'Logo'} src={logoImage} />
                    <NavMenu />
                </div>
                <div className={'MainContent'}>
                    <h2>{heading}</h2>
                    {children}
                </div>
            </div>
        </>
    )
}