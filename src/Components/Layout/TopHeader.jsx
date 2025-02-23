import DropDown from "../DropDown/DropDown"

export default function TopHeader(props) {

    return (
        <div className="flex justify-between bg-[color:--button] text-[color:--primary] h-12 items-center text-sm px-36">
            <div className="flex content-center h-6 gap-2 items-center flex-2 mx-auto">
                <span>Summer Sale For All Swim Suits And Free Express Delivery - OFF 50%!</span>
                <button href="" className="font-semibold underline underline-offset-2 decoration-0 ml-auto">ShopNow</button>
            </div>
            <DropDown />
        </div>
    )
}