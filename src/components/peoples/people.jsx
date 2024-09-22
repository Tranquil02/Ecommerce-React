import React, { useEffect, useRef, useState } from "react";
import "./TeamPage.css"; // Import the CSS file for styling

const teamMembers = [
  {
    name: "Tom Cruise",
    role: "Founder & Chairman",
    imgSrc: "https://placehold.co/200x200",
    twitter: "#",
    instagram: "#",
    linkedin: "#",
  },
  {
    name: "Emma Watson",
    role: "Managing Director",
    imgSrc: "https://placehold.co/200x200",
    twitter: "#",
    instagram: "#",
    linkedin: "#",
  },
  {
    name: "Will Smith",
    role: "Product Designer",
    imgSrc: "https://placehold.co/200x200",
    twitter: "#",
    instagram: "#",
    linkedin: "#",
  },
  {
    name: "Scarlett Johansson",
    role: "CEO",
    imgSrc: "https://placehold.co/200x200",
    twitter: "#",
    instagram: "#",
    linkedin: "#",
  },
  {
    name: "Robert Downey Jr.",
    role: "CTO",
    imgSrc: "https://placehold.co/200x200",
    twitter: "#",
    instagram: "#",
    linkedin: "#",
  },
  {
    name: "Will Smith",
    role: "Product Designer",
    imgSrc: "https://placehold.co/200x200",
    twitter: "#",
    instagram: "#",
    linkedin: "#",
  },
  {
    name: "Scarlett Johansson",
    role: "CEO",
    imgSrc: "https://placehold.co/200x200",
    twitter: "#",
    instagram: "#",
    linkedin: "#",
  },
  {
    name: "Robert Downey Jr.",
    role: "CTO",
    imgSrc: "https://placehold.co/200x200",
    twitter: "#",
    instagram: "#",
    linkedin: "#",
  },
];

const TeamMemberCard = ({ member }) => (
  <div className="card">
    <img
      className="profile-img"
      src={member.imgSrc}
      alt={`Portrait of ${member.name}`}
    />
    <h2 className="member-name">{member.name}</h2>
    <p className="member-role">{member.role}</p>
    <div className="social-icons">
      <a href={member.twitter} className="icon" aria-label={`Twitter profile of ${member.name}`}>
        <i className="fab fa-twitter"></i>
      </a>
      <a href={member.instagram} className="icon" aria-label={`Instagram profile of ${member.name}`}>
        <i className="fab fa-instagram"></i>
      </a>
      <a href={member.linkedin} className="icon" aria-label={`LinkedIn profile of ${member.name}`}>
        <i className="fab fa-linkedin"></i>
      </a>
    </div>
  </div>
);

const TeamPage = () => {
  const scrollRef = useRef(null);
  const [activeIndex, setActiveIndex] = useState(0);
  const membersToShow = 3;

  useEffect(() => {
    const scrollInterval = setInterval(() => {
      setActiveIndex((prevIndex) => {
        const nextIndex = (prevIndex + 1) % teamMembers.length;

        if (scrollRef.current) {
          const cardWidth = scrollRef.current.clientWidth / membersToShow; // Width for visible cards
          const newScrollPos = (nextIndex * cardWidth) % (teamMembers.length * cardWidth);
          scrollRef.current.scrollTo({ left: newScrollPos, behavior: "smooth" });
        }

        return nextIndex;
      });
    }, 3000); // Scroll every 3 seconds

    return () => clearInterval(scrollInterval);
  }, []);

  return (
    <div className="teamPage">
      <div className="team-container" ref={scrollRef}>
        <div className="grid" style={{ display: 'flex' }}>
          {teamMembers.map((member, index) => (
            <div key={index} style={{ minWidth: '33.33%' }}>
              <TeamMemberCard member={member} />
            </div>
          ))}
        </div>
      </div>
      <div className="pagination">
        {Array.from({ length: Math.ceil(teamMembers.length / membersToShow) }).map((_, i) => (
          <span key={i} className={`dot ${i === Math.floor(activeIndex / membersToShow) ? "active" : ""}`}></span>
        ))}
      </div>
    </div>
  );
};

export default TeamPage;
