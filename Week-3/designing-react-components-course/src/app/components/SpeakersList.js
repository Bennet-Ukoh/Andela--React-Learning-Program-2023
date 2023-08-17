import React from "react";
import Speaker from "./Speaker";
import useRequestDelay, { REQUEST_STATUS } from "./hooks/useRequestDelay";
import { data } from "../SpeakerData";
import { SpeakerFilterContext } from "../contexts/SpeakerFilterContext";
import { useContext } from "react";
import SpeakerAdd from './SpeakerAdd'

//import ReactPlaceHolder from "react-placeholder";

const SpeakersList = ({ showSessions }) => {
  const {
    data: speakersData,
    updateRecord,
    insertRecord,
    deleteRecord,
    requestStatus,
    error,
  } = useRequestDelay(2000, data);

  const { searchQuery, eventYear } = useContext(SpeakerFilterContext);

  if (requestStatus === REQUEST_STATUS.FAILURE) {
    return (
      <div className="text-danger">
        ERROR: <b>loading Speaker Data Failed {error}</b>
      </div>
    );
  }
  if (requestStatus === REQUEST_STATUS.LOADING) return <div>Loading...</div>;

  return (
    <div className="container speakers-list">
      {/* <ReactPlaceHolder
       // type="media"
       // rows={15}
       // className="speakerslist-placeholder"
       // ready={isLoading === false} */}
      <SpeakerAdd eventYear={eventYear} insertRecord={insertRecord} />
      <div className="row">
        {speakersData
          .filter(function (speaker) {
            return (
              speaker.first.toLowerCase().includes(searchQuery) ||
              speaker.last.toLowerCase().includes(searchQuery)
            );
          })
          .filter(function (speaker) {
            return speaker.sessions.find((session) => {
              return session.eventYear === eventYear;
            });
          })
          .map(function (speaker) {
            return (
              <Speaker
                key={speaker.id}
                speaker={speaker}
                updateRecord={updateRecord}
                insertRecord={insertRecord}
                deleteRecord={deleteRecord}
              />
            );
          })}
      </div>
      {/* </ReactPlaceHolder> */}
    </div>
  );
};

export default SpeakersList;
