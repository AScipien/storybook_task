import "./Grid.css";

interface GridProps {
    /**
     * Size of grid
     */
    size?: string,
    /**
     * Array of elements have to be passed
     */
    children: JSX.Element[],
}
/**
 * Primary Grid component used for displaying images in a form of grid
 */
const Grid = ({ children, size = "s" }: GridProps) => {
    const gridClass = "grid " + size;
    return (
        <div className={gridClass}>
            {children}
        </div>
    )
}

export default Grid;