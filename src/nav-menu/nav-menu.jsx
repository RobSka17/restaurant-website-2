import './nav-menu.css'

export const NavMenu = () => {
    return (
        <>
            <div className={'NavMenu'}>
                <NavItem props={{
                    name: 'Home',
                    route: '/'
                }}/>
                <NavItem props={{
                    name: 'About Us',
                    route: '/about-us'
                }}/>
                <NavItem props={{
                    name: 'Where Are We?',
                    route: '/where-are-we'
                }}/>
                <NavItem props={{
                    name: 'Make a Reservation',
                    route: '/make-a-reservation'
                }}/>
            </div>
        </>
    )
}

const NavItem = ({props}) => {
    const {
        name,
        route
    } = props

    function onClick() {
        window.location = route
    }

    return (
        <>
            <span className={'NavItem'} onClick={onClick}>{name}</span>
        </>
    )
}