import './nav-menu.css'
import homeIcon from '../assets/icons/home.svg'
import homeIconBlack from '../assets/icons/home-black.svg'
import aboutUsIcon from '../assets/icons/question-mark-circle.svg'
import aboutUsIconBlack from '../assets/icons/question-mark-circle-black.svg'
import whereAreWeIcon from '../assets/icons/location.svg'
import whereAreWeIconBlack from '../assets/icons/location-black.svg'
import makeAReservationIcon from '../assets/icons/book.svg'
import makeAReservationIconBlack from '../assets/icons/book-black.svg'
import foodIcon from '../assets/icons/food.svg'
import foodIconBlack from '../assets/icons/food-black.svg'
import { useState } from 'react'

export const NavMenu = () => {
    return (
        <>
            <div className={'NavMenu'}>
                <NavItem props={{
                    name: 'Home',
                    route: '/',
                    icon: homeIcon,
                    iconBlack: homeIconBlack
                }}/>
                <NavItem props={{
                    name: 'About Us',
                    route: '/about-us',
                    icon: aboutUsIcon,
                    iconBlack: aboutUsIconBlack
                }}/>
                <NavItem props={{
                    name: 'Where Are We?',
                    route: '/where-are-we',
                    icon: whereAreWeIcon,
                    iconBlack: whereAreWeIconBlack
                }}/>
                <NavItem props={{
                    name: 'Make a Reservation',
                    route: '/make-a-reservation',
                    icon: makeAReservationIcon,
                    iconBlack: makeAReservationIconBlack
                }}/>
                <NavItem props={{
                    name: 'Food',
                    icon: foodIcon,
                    iconBlack: foodIconBlack,
                    dropdown: true
                }}/>
            </div>
        </>
    )
}

const NavItem = ({props}) => {
    const {
        name,
        route,
        icon,
        iconBlack,
        dropdown
    } = props

    const [currentIcon, setCurrentIcon] = useState(icon)
    const [showDropdown, setShowDropdown] = useState(false)

    function onClick() {
        window.location = route
    }

    function onClickDropdown() {
        setShowDropdown(!showDropdown)
    }

    function onMouseEnter() {
        setCurrentIcon(iconBlack)
    }

    function onMouseLeave() {
        setCurrentIcon(icon)
    }

    if(dropdown) return (
        showDropdown ?
        <>
            <span className={'NavItem'} onClick={onClickDropdown} onMouseEnter={onMouseEnter} onMouseLeave={onMouseLeave}>
                <img className={'NavIcon'} src={currentIcon} />
                {name}
            </span>
            <DropdownMenu props={{
                items: [
                    { name: 'Sandwiches', route: '/' },
                    { name: 'Pasta', route: '/' },
                    { name: 'Pizza', route: '/' },
                    { name: 'Rice', route: '/' },
                    { name: 'Desserts', route: '/' }
                ]
            }}/>
        </>
        :
        <>
            <span className={'NavItem'} onClick={onClickDropdown} onMouseEnter={onMouseEnter} onMouseLeave={onMouseLeave}>
                { icon ? <img className={'NavIcon'} src={currentIcon} /> : <></> }
                {name}
            </span>
        </>
    )

    return (
        <>
            <span className={'NavItem'} onClick={onClick} onMouseEnter={onMouseEnter} onMouseLeave={onMouseLeave}>
                { icon ? <img className={'NavIcon'} src={currentIcon} /> : <></> }
                {name}
            </span>
        </>
    )
}

const DropdownMenu = ({props}) => {
    const {
        items
    } = props

    return (
        <>
            <div className={'DropdownMenu'}>
                {
                    items.map(i => <NavItem key={`nav-item-${i.name}`} props={{
                        name: i.name,
                        route: i.route
                    }} />)
                }
            </div>
        </>
    )
}