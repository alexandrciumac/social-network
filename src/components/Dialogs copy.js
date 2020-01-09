import React from 'react'
import {FormControl, Form, Image, Button, InputGroup} from 'react-bootstrap';

const Dialogs = (props) => (
    <div className="container py-5 px-4">
        <div className="row rounded-lg overflow-hidden shadow">
        <div className="col-5 px-0">
        <div className="bg-white">

        <div className="bg-gray px-4 py-2 bg-light">
          <p className="h5 mb-0 py-1">Recent</p>
        </div>


        <div className="messages-box">
          <div className="list-group rounded-0">
            <a className="list-group-item list-group-item-action active text-white rounded-0">
                <div className="media"><Image src="https://res.cloudinary.com/mhmd/image/upload/v1564960395/avatar_usae7z.svg" alt="user" width="50" className="rounded-circle" />
                    <div className="media-body ml-4">
                    <div className="d-flex align-items-center justify-content-between mb-1">
                        <h6 className="mb-0">Jason Doe</h6><small className="small font-weight-bold">25 Dec</small>
                    </div>
                    <p className="font-italic mb-0 text-small">Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore.</p>
                    </div>
                </div>
            </a>
            
            <a href="#" className="list-group-item list-group-item-action list-group-item-light rounded-0">
              <div className="media"><Image src="https://res.cloudinary.com/mhmd/image/upload/v1564960395/avatar_usae7z.svg" alt="user" width="50" className="rounded-circle" />
                <div className="media-body ml-4">
                  <div className="d-flex align-items-center justify-content-between mb-1">
                    <h6 className="mb-0">Jason Doe</h6><small className="small font-weight-bold">14 Dec</small>
                  </div>
                  <p className="font-italic text-muted mb-0 text-small">Lorem ipsum dolor sit amet, consectetur. incididunt ut labore.</p>
                </div>
              </div>
            </a>

            <a href="#" className="list-group-item list-group-item-action list-group-item-light rounded-0">
              <div className="media"><Image src="https://res.cloudinary.com/mhmd/image/upload/v1564960395/avatar_usae7z.svg" alt="user" width="50" className="rounded-circle" />
                <div className="media-body ml-4">
                  <div className="d-flex align-items-center justify-content-between mb-1">
                    <h6 className="mb-0">Jason Doe</h6><small className="small font-weight-bold">9 Nov</small>
                  </div>
                  <p className="font-italic text-muted mb-0 text-small">consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore.</p>
                </div>
              </div>
            </a>

            <a href="#" className="list-group-item list-group-item-action list-group-item-light rounded-0">
              <div className="media"><Image src="https://res.cloudinary.com/mhmd/image/upload/v1564960395/avatar_usae7z.svg" alt="user" width="50" className="rounded-circle" />
                <div className="media-body ml-4">
                  <div className="d-flex align-items-center justify-content-between mb-1">
                    <h6 className="mb-0">Jason Doe</h6><small className="small font-weight-bold">18 Oct</small>
                  </div>
                  <p className="font-italic text-muted mb-0 text-small">Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore.</p>
                </div>
              </div>
            </a>

            <a href="#" className="list-group-item list-group-item-action list-group-item-light rounded-0">
              <div className="media"><Image src="https://res.cloudinary.com/mhmd/image/upload/v1564960395/avatar_usae7z.svg" alt="user" width="50" className="rounded-circle" />
                <div className="media-body ml-4">
                  <div className="d-flex align-items-center justify-content-between mb-1">
                    <h6 className="mb-0">Jason Doe</h6><small className="small font-weight-bold">17 Oct</small>
                  </div>
                  <p className="font-italic text-muted mb-0 text-small">consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore.</p>
                </div>
              </div>
            </a>

            <a href="#" className="list-group-item list-group-item-action list-group-item-light rounded-0">
              <div className="media"><Image src="https://res.cloudinary.com/mhmd/image/upload/v1564960395/avatar_usae7z.svg" alt="user" width="50" className="rounded-circle" />
                <div className="media-body ml-4">
                  <div className="d-flex align-items-center justify-content-between mb-1">
                    <h6 className="mb-0">Jason Doe</h6><small className="small font-weight-bold">2 Sep</small>
                  </div>
                  <p className="font-italic text-muted mb-0 text-small">Quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.</p>
                </div>
              </div>
            </a>

        </div>
        </div>
        </div>
        </div>

        <div className="col-7 px-0">
        <div className="px-4 py-5 chat-box bg-white">

            <div className="media w-50 mb-3"><Image src="https://res.cloudinary.com/mhmd/image/upload/v1564960395/avatar_usae7z.svg" alt="user" width="50" className="rounded-circle" />
                <div className="media-body ml-3">
                    <div className="bg-light rounded py-2 px-3 mb-2">
                    <p className="text-small mb-0 text-muted">Test which is a new approach all solutions</p>
                    </div>
                    <p className="small text-muted">12:00 PM | Aug 13</p>
                </div>
            </div>

            <div className="media w-50 ml-auto mb-3">
                <div className="media-body">
                    <div className="bg-primary rounded py-2 px-3 mb-2">
                    <p className="text-small mb-0 text-white">Test which is a new approach to have all solutions</p>
                    </div>
                    <p className="small text-muted">12:00 PM | Aug 13</p>
                </div>
            </div>


            <div className="media w-50 mb-3"><Image src="https://res.cloudinary.com/mhmd/image/upload/v1564960395/avatar_usae7z.svg" alt="user" width="50" className="rounded-circle" />
                <div className="media-body ml-3">
                    <div className="bg-light rounded py-2 px-3 mb-2">
                    <p className="text-small mb-0 text-muted">Test, which is a new approach to have</p>
                    </div>
                    <p className="small text-muted">12:00 PM | Aug 13</p>
                </div>
            </div>

            <div className="media w-50 ml-auto mb-3">
                <div className="media-body">
                    <div className="bg-primary rounded py-2 px-3 mb-2">
                    <p className="text-small mb-0 text-white">Apollo University, Delhi, India Test</p>
                    </div>
                    <p className="small text-muted">12:00 PM | Aug 13</p>
                </div>
            </div>

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
);

export default Dialogs;