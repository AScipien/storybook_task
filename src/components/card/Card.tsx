import "./Card.css";

interface CardProps {
    /**
     * Content have to be passed
     */
    children: JSX.Element,
    /**
        * What background color to use
    */
    backgroundColor?: string,
    /**
    * What text color to use
*/
    color?: string,
}

/**
 * Basic card component for displaying content
 */
const Card = ({ children, backgroundColor = "white", color = "black" }: CardProps) => {
    return (
        <div className="card" style={{ backgroundColor, color }}>
            {children}
        </div>
    )
}

export default Card;