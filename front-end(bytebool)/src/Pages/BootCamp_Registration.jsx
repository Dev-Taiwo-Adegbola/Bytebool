import Header from "../Components/Header"
import Registration_Form from "../Components/Registration_Form"

const BootCamp_Registration = ({onSetUser}) => {
  return (
    <>
    {/* <Header /> */}
    <Registration_Form onSetUser={onSetUser} />
    </>
  )
}
export default BootCamp_Registration