import Header from "./Header";

function Layout({children}) {
    return (
        <div>
            <Header/>
            <div className="container px-3">{children}</div>
        </div>
    );
}

export default Layout;