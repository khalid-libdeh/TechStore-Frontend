import NavigationBar from "../NavigationBar/NavigationBar"

export default function Header(props) {
    return (
        <header className="flex justify-between items-center h-10 mx-36">
            <div>
                <span className="text-2xl font-bold">{props.title}</span>
            </div>
            <div className="flex">
                <NavigationBar />
            </div>

            <div className="flex w-60 bg-black">
                <input></input>
                <input></input>
                <input></input>
            </div>
        </header>
    )
}