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
)
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
]

let IncomeMessagesData = [
  {id: 1, message: 'Hello, brother, how are you?', time: '12:00 PM', date: 'Feb 1'},
  {id: 2, message: 'I am good , you?', time: '12:00 PM', date: 'Feb 5'},
  {id: 3, message: 'Good, bro!', time: '12:00 PM', date: 'Feb 8'}
]

let OutcomeMessagesData = [
  {id: 1, message: 'Hello, brother!', time: '12:00 PM', date: 'Feb 19'},
  {id: 2, message: 'I am good , you?', time: '12:00 PM', date: 'Feb 22'},
  {id: 3, message: 'Nice.', time: '12:00 PM', date: 'Feb 24'}
]


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

                    <Contacts id={dialogsData[0].id} name={dialogsData[0].name} image={dialogsData[0].image} date={dialogsData[0].date} shortText={dialogsData[0].shortText}/>
                    <Contacts id={dialogsData[1].id} name={dialogsData[1].name} image={dialogsData[1].image} date={dialogsData[1].date} shortText={dialogsData[1].shortText}/>
                    <Contacts id={dialogsData[2].id} name={dialogsData[2].name} image={dialogsData[2].image} date={dialogsData[2].date} shortText={dialogsData[2].shortText}/>
                    
                   </div>
                </div>
              </div>
            </div>

        <div className="col-7 px-0">
        <div className="px-4 py-5 chat-box bg-white">
{/* ОШИБКА В КОДЕ, НЕ ВЫВОДИТ СООБЩЕНИЯ */}
          <IncomeMessages id={IncomeMessagesData[0].id} message={IncomeMessagesData[0].message} time={IncomeMessagesData[0].time} date={IncomeMessagesData[0].date}/>
          <OutcomeMessages id={OutcomeMessagesData[0].id} message={OutcomeMessagesData[0].message} time={OutcomeMessagesData[0].time} date={OutcomeMessagesData[0].date}/>
          <OutcomeMessages id={OutcomeMessagesData[1].id} message={OutcomeMessagesData[1].message} time={OutcomeMessagesData[1].time} date={OutcomeMessagesData[1].date}/>
          <IncomeMessages id={IncomeMessagesData[1].id} message={IncomeMessagesData[1].message} time={IncomeMessagesData[1].time} date={IncomeMessagesData[1].date}/>
          <OutcomeMessages id={OutcomeMessagesData[2].id} message={OutcomeMessagesData[2].message} time={OutcomeMessagesData[2].time} date={OutcomeMessagesData[2].date}/>
          <IncomeMessages id={IncomeMessagesData[2].id} message={IncomeMessagesData[2].message} time={IncomeMessagesData[2].time} date={IncomeMessagesData[2].date}/>



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