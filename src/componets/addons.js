import TimeAddon from "./addons/timeAddon";
import SubpointsAddon from "./addons/subpointsAddon";
import LocationAddon from "./addons/locationAddon";
import DescriptionAddon from "./addons/descriptionAddon";



const addons = () => {
    return (
        <>
            <div className="flex gap-2 opacity-80">
                <TimeAddon/>
                <DescriptionAddon/>
                <SubpointsAddon/>
                <LocationAddon/>
            </div>
        </>
    )
}

export default addons;