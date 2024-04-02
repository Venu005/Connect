interface MeetingpageProps {
  params: {
    id: string;
  };
}

const Meetingpage = ({ params }: MeetingpageProps) => {
  return <div>{params.id}</div>;
};

export default Meetingpage;
