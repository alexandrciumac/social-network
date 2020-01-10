import React from 'react'
import {FormControl, Form, Image, Button, InputGroup} from 'react-bootstrap';
import {NavLink} from "react-router-dom";
import userImage from "./../img/avatar-user.svg";


const Contacts = (props) => {
  let userLink = "/dialogs/" + props.id;
return (
  <div>
    <NavLink to={userLink} className="list-group-item list-group-item-action rounded-0">
          <div className="media"><Image src={props.image} alt="user" width="50" className="rounded-circle" />
        <div className="media-body ml-4">
          <div className="d-flex align-items-center justify-content-between mb-1">
            <h6 className="mb-0">{props.name}</h6><small className="small font-weight-bold">{props.date}</small>
          </div>
          <p className="font-italic mb-0 text-small">{props.shortText}</p>
        </div>
      </div>
    </NavLink>
  </div>
);
}

const IncomeMessages = (props) => {
  return (
    <div className="media w-50 mb-3"><Image src="https://res.cloudinary.com/mhmd/image/upload/v1564960395/avatar_usae7z.svg" alt="user" width="50" className="rounded-circle" />
      <div className="media-body ml-3">
          <div className="bg-light rounded py-2 px-3 mb-2">
          <p className="text-small mb-0 text-muted">{props.message}</p>
          </div>
          <p className="small text-muted">{props.time} | {props.date}</p>
      </div>
    </div>
  );
}

const OutcomeMessages = (props) => {
  return (
    <div className="media w-50 ml-auto mb-3">
      <div className="media-body">
          <div className="bg-primary rounded py-2 px-3 mb-2">
          <p className="text-small mb-0 text-white">{props.message}</p>
          </div>
          <p className="small text-muted">{props.time} | {props.date}</p>
      </div>
    </div>
  );
}


const Dialogs = (props) => {

let dialogsData = [
  {id: 1, name: 'Alex', image: userImage, date: 'Feb 14', shortText:'Test which is a new approach all solutions'},
  {id: 2, name: 'Dmitry', image: userImage, date: 'Feb 18', shortText:'Test which is a new approach all solutions'},
  {id: 3, name: 'Paul', image: userImage, date: 'Feb 21', shortText:'Test which is a new approach all solutions'},
];

let DialogElements = dialogsData
.map (dialog => <Contacts id={dialog.id} name={dialog.name} image={dialog.image} date={dialog.date} shortText={dialog.shortText}/>);

let IncomeMessagesData = [
  {id: 1, message: 'Hello, brother, how are you?', time: '12:00 PM', date: 'Feb 1'},
  {id: 2, message: 'I am good , you?', time: '12:00 PM', date: 'Feb 5'},
  {id: 3, message: 'Good, bro!', time: '12:00 PM', date: 'Feb 8'}
];

let OutcomeMessagesData = [
  {id: 1, message: 'Hello, brother!', time: '12:00 PM', date: 'Feb 19'},
  {id: 2, message: 'I am good , you?', time: '12:00 PM', date: 'Feb 22'},
  {id: 3, message: 'Nice.', time: '12:00 PM', date: 'Feb 24'}
];

let MessagesData = [
  {id: 1, message: 'Hello, brother!', time: '12:00 PM', date: 'Feb 19', income: 1},
  {id: 2, message: 'I am good , you?', time: '12:00 PM', date: 'Feb 22', income: 1},
  {id: 3, message: 'Nice.', time: '12:00 PM', date: 'Feb 24', income: 0}
];

let IncomeMessagesElements = IncomeMessagesData
.map(message => <IncomeMessages id={message.id} message={message.message} time={message.time} date={message.date}/>)
let OutcomeMessagesElements = OutcomeMessagesData
.map(message => <OutcomeMessages id={message.id} message={message.message} time={message.time} date={message.date}/>)
// let InMessagesElements = MessagesData
// .map(message => <IncomeMessages id={message.id} message={message.message} time={message.time} date={message.date}/>)
// let OutMessagesElements = MessagesData
// .map(message => <OutcomeMessages id={message.id} message={message.message} time={message.time} date={message.date}/>)

// let chat = function getChat() {
//   if (MessagesData.income = 1) {
//     return InMessagesElements;
//   }
//   else {
//     return OutMessagesElements;
//   }
// }

// let getChat = function getChaty() {
//   let length = 0;
//   for (let i = 0; i < MessagesData.length; i++) {
//     if (MessagesData.income = 1) {
//       return InMessagesElements;
//     }
//   }
//   return OutMessagesElements;
// }

return (
    <div className="container py-5 px-4">
        <div className="row rounded-lg overflow-hidden shadow">
            <div className="col-5 px-0">
              <div className="bg-white">

                <div className="bg-gray px-4 py-2 bg-light">
                  <p className="h5 mb-0 py-1">Recent</p>
                </div>

                <div className="messages-box">
                  <div className="list-group rounded-0">

                  {DialogElements}

                   </div>
                </div>
              </div>
            </div>

        <div className="col-7 px-0">
        <div className="px-4 py-5 chat-box bg-white">

        {IncomeMessagesElements}
        {OutcomeMessagesElements}

        </div>



        <Form action="#" className="bg-light">
            <div className="input-group">
                <InputGroup>
                    <FormControl
                        placeholder="Text your message"
                        aria-label="Text your message"
                        aria-describedby="basic-addon2"
                        className="form-control rounded-0 border-0 py-4 bg-light"
                    />
                    <InputGroup.Append>
                        <Button id="button-addon2" type="submit"><i className="fa fa-paper-plane"></i></Button>
                    </InputGroup.Append>
                </InputGroup>     
            </div> 
        </Form>   


        </div>


        </div>
    </div>
);}

export default Dialogs;