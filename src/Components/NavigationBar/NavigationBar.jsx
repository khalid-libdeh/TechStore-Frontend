export default function NavigationBar(props) {
    return (
        <ul className="flex gap-x-12 content-between items-center md:flex md:w-auto py-1.5">
            <li className="text-base md:border-0"><a href="#">Home</a></li>
            <li className="text-base md:border-0"><a href="#">Contact</a></li>
            <li className="text-base md:border-0"><a href="#">About</a></li>
            <li className="text-base md:border-0"><a href="#">Sign Up</a></li>
        </ul>
    )
}