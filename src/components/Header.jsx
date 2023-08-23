import PropTypes from "prop-types";
export const Header = ({
                           title = 'Default title'
                       }) => {
    // Props destructuring
    // const {title} = props;
    // PropsType validation
    return (
        <>
            <header className={'text-2xl font-bold bg-indigo-300 text-white container mx-auto py-4'}>
                <h1>{
                    title
                }</h1>
            </header>
        </>
    )
}
// PropsType validation
Header.propTypes = {
    title: PropTypes.string.isRequired
}
// Default props
Header.defaultProps = {
    title: 'Default title'
}