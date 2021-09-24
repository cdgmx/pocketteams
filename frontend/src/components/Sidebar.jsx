import Notes from "./Notes";
import ProfileCard from "./ProfileCard";
import Teamcard from "./TeamCard";

const Sidebar = () => {
  return (
    <div class="d-flex flex-column sidebar-wrapper scrolling-wrapper-y h-100">
      <ProfileCard />
      <div className="team-section-wrapper d-flex flex-column scrolling-wrapper-y flex-grow-1 mb-5 p-2">
      <Teamcard />
      <Teamcard />
      <Teamcard />
      </div>
      

      {/* keep the notes at the bottom */}
      <div className="d-flex flex-column flex-grow-2 mt-auto"> 

        <Notes />
      </div>
    
    </div>
  );
};
export default Sidebar;
