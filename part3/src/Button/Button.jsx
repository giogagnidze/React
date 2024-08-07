// import styles from './Button.module.css'
function Button(){
    
    const styles = {
        backgroundColor: "aqua",
        color: "white",
        padding: "10px 20px",
        borderRadius: "5px",
        border: "none",
        cursor: "pointer",
    }

    return(
        // <button className="btn">Click Me</button>// for external
        // <button className={styles.btn}>Click Me</button> // for module



        // INLINE
        <button style={styles}>Click Me</button>
    );
}
export default Button