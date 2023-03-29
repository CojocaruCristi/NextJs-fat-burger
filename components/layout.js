const { default: Footer } = require("./footer")
const { default: Header } = require("./header")


const Layout = ({ children }) => {

    return (
        <div className="content">
            <Header />
            {children}
            <Footer />
        </div>

    )
}

export default Layout;