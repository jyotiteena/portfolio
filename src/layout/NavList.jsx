
const NavList = ({ filterCat, navList }) => {
    return (
        <>
            <nav className='navbar justify-content-center'>
                <div className="btn-group">
                    {
                        navList.map((item) => {
                            return (
                                <>
                                    <button className='btn btn-outline-info rounded mx-3 px-5' onClick={() => filterCat(item)}>{item}</button>
                                </>
                            )
                        })
                    }
                </div>

            </nav>
        </>
    )
}

export default NavList