

import { useState } from "react";
import { HoveredLink, Menu, MenuItem, ProductItem } from "../../components/ui/navbar-menu";
import { ModeToggle } from "../../components/ui/custom/switch-mode/Toggle";

const Navbar = () => {
  const [active, setActive] = useState<string | null>(null);

  return (
    <div className="w-full flex justify-center mt-2">
      <Menu setActive={setActive} >
        
   

        <MenuItem item="Company" active={active} setActive={setActive}>
          <div className="flex flex-col space-y-2">
            <HoveredLink href="/about">About Us</HoveredLink>
            <HoveredLink href="/team">Our Team</HoveredLink>
            <HoveredLink href="/careers">Careers</HoveredLink>
           
          </div>
        </MenuItem>

             <MenuItem item="Products" active={active} setActive={setActive}>
          <div className="grid grid-cols-1 gap-4">

            <ProductItem
              title="Tool"
              description="Your personal Tool"
              href="/product/ai"
              src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQrvUt_CMx9Wn4eLFv-s5WilU3BlZZ2Qkf2eA&s"
            />
            <ProductItem
              title="Analytics"
              description="Advanced insights"
              href="/product/analytics"
              src="https://w0.peakpx.com/wallpaper/274/901/HD-wallpaper-robot-technology.jpg"
            />
          </div>
        </MenuItem>

        <MenuItem item="Contact" active={active} setActive={setActive}>
          <div className="flex flex-col space-y-2">
            <HoveredLink href="/contact">Contact Form</HoveredLink>
            <HoveredLink href="/support">Support</HoveredLink>
          </div>
        </MenuItem>
   
        <div className="flex items-center gap-5">
              <ModeToggle/>
        </div>
      
       


      </Menu>
    </div>
  );
};

export default Navbar;
