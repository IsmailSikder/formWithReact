import {connect} from 'react-redux'
import { createStructuredSelector } from 'reselect'
import OutputView from '../../components/output.component'
import { selectUserInput } from '../../redux/output.selector'
const OutputPage=({userInput})=>{
console.log(userInput)
return(
    <div className='output-page'>

        {
        userInput.map(({firstName,lastName,phoneNumber})=>(
            <OutputView
              firstName={firstName}
              lastName={lastName}
              phoneNumber={phoneNumber}
            />
        )
        )
      }
      
    </div>
)}
const mapStateToProps =()=>createStructuredSelector
(
{
    userInput: selectUserInput
}
)
export default connect(mapStateToProps,null) (OutputPage)