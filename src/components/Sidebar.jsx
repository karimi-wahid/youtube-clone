import { useContext } from "react"
import { sideBar, sideBarProfile } from "../index"
import { AppContext } from "../features/AppContext"


const Sidebar = () => {
    const { sideToggle, setCategory } = useContext(AppContext);

    return (
        <div className={`${sideToggle ? "w-[15%] " : "w-[5%]"} bg-white h-[100vh] fixed top-0 pl-[2%] pt-[65px] hidden md:block overflow-hidden`}>
            <div className="">
                {sideBar.map((item, index) => (
                    <div key={index} className="flex items-center py-[5px] cursor-pointer" onClick={() => setCategory(item.id)}>
                        <img className="w-[20px] mr-5" src={item.img} alt={item.label} />
                        {sideToggle && (
                            <p className="font-thin hover:font-semibold ">{item.label}</p>
                        )}
                    </div>
                ))}
                <hr className="w-2/3 border-t border-slate-200 my-3" />
            </div>
            <div>
                {sideToggle && (
                    <h3 className="font-semibold my-3">Subscribed</h3>
                )}
                {sideBarProfile.map((profile, index) => (
                    <div key={index} className="flex gap-3 mb-2 cursor-pointer">
                        <img className="w-[30px] rounded-full" src={profile.img} alt={profile.label} />
                        {sideToggle && (
                            <p className="font-thin hover:font-semibold">{profile.label}</p>
                        )}
                    </div>
                ))}
            </div>
        </div>
    )
}

export default Sidebar