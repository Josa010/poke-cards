const Header = () => {
    const view = `
    <nav>
        <div class="header-logo">
            <h1>
                <a href="/">
                    PokeAPI
                </a>
            </h1>
        </div>
        <div class="header-nav"> 
            <a href="#/about/">About</a>
        </div>
    </nav>
    `
    return view
}

export default Header