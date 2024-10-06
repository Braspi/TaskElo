import TimeAddon from "./addons/time.addon";
import SubpointsAddon from "./addons/subpoints.addon";
import LocationAddon from "./addons/location.addon";
import DescriptionAddon from "./addons/description.addon";

export default function addons() {
  return (
    <div className="flex gap-2 opacity-80">
      <TimeAddon />
      <DescriptionAddon />
      <SubpointsAddon />
      <LocationAddon />
    </div>
  );
};
