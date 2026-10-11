import type { Goal } from '../types';

type ProfileCardProps = {
    name: string;
    bio: string;
    avatarUrl?: string;
    skills: string[];
    goals: Goal[];
}

function ProfileCard ({ name, bio, avatarUrl, skills, goals }: ProfileCardProps) {
    return (
        <section className="profile-card">
            <h2>{name}</h2>
            <p>{bio}</p>
            <img 
             src={avatarUrl} 
             alt="Profile picture of mine Github account"
            />
            <h3>Skills</h3>
            <ul>
                {skills.map((skill) => (
                    <li key={skill}>{skill}</li>
                ))}
            </ul>
            <h3>My Goals</h3>
            <table>
                <thead>
                    <tr>
                        <th>Skiil</th>
                        <th>Current Level</th>
                        <th>Desired Level</th>
                    </tr>
                </thead>
                <tbody>
                    {goals.map((goal) => (
                        <tr key={goal.skill}>
                            <td>{goal.skill}</td>
                            <td>{goal.currentLevel}</td>
                            <td>{goal.desiredLevel}</td>
                        </tr>
                    ))}
                </tbody>
            </table>
        </section>
    );
}

export default ProfileCard;