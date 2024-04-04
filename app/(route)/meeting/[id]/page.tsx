"use client";
import Loader from "@/components/Loader";
import MeetingRoom from "@/components/MeetingRoom";
import MeetingSetup from "@/components/MeetingSetup";
import { useGetCallById } from "@/hooks/useGetCallById";
import { useUser } from "@clerk/nextjs";
import { StreamCall, StreamTheme } from "@stream-io/video-react-sdk";
import { useState } from "react";
interface MeetingpageProps {
  params: {
    id: string;
  };
}

const Meetingpage = ({ params }: MeetingpageProps) => {
  const { user, isLoaded } = useUser();
  const [isSetupComplete, setisSetupComplete] = useState(false);
  const { call, isCallLoading } = useGetCallById(params.id);
  if (!isLoaded || isCallLoading) return <Loader />;
  return (
    <main className="h-screen w-full">
      <StreamCall call={call}>
        <StreamTheme>
          {!isSetupComplete ? (
            //TODO: Add setup component
            <MeetingSetup setisSetupComplete={setisSetupComplete} />
          ) : (
            //TODO: Add meeting component
            <MeetingRoom />
          )}
        </StreamTheme>
      </StreamCall>
    </main>
  );
};

export default Meetingpage;
