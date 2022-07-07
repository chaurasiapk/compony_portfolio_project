import React from "react";
import image3 from "../../assets/images/image3.png";
import image4 from "../../assets/images/image4.png";
import image5 from "../../assets/images/image5.png";



import "./team.css";

export const Team =()=>{

    const members =[{
        name:"Esther Howard",
        designation: "CEO",
        image: image3,
    },

    {
        name:"Robert Fox",
        designation: "Project Manager",
        image: image4,
    },

    {
        name:"Jenny Wilson",
        designation: "Lead Designer",
        image: image5,
    }

];
    return(
        <div className="team-container">

                <div className="team"> 

                    <div className="team-heading">
                        <h5>Our talents</h5>
                    </div>

                    <div className="team-members">
                        {
                            members.map((member , index)=>{
                                return(
                                <div key={index} className="member">
                                    <img src={member.image} alt=""/>
                                    <h5>{member.name}</h5>
                                    <span>{member.designation}</span>

                                  </div>
                                );
                            })
                        }
                        

                        



                    </div>

                </div>

        </div>
    );
}