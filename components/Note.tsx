"use client";

import React, {ReactNode} from "react";
import {ReactNodeArray} from "prop-types";
import {TbNote} from 'react-icons/tb';
import {GoFlame} from "react-icons/go";
import {HiOutlineLightBulb} from "react-icons/hi";
import {IoWarningOutline} from "react-icons/io5";
import {RiErrorWarningLine, RiArchiveLine} from "react-icons/ri";
import {NoteType} from "@/utils/types";



function Note({type, children}: { type: NoteType, children: ReactNodeArray | ReactNode }) {

    const getIcon = () => {
        switch (type) {
            case NoteType.Deprecated:
                return <RiArchiveLine/>;
            case NoteType.Note:
                return <TbNote/>;
            case NoteType.Warning:
                return <IoWarningOutline/>;
            case NoteType.StrongWarning:
                return <GoFlame/>;
            case NoteType.Tip:
                return <HiOutlineLightBulb/>;
            case NoteType.Disclaimer:
                return <RiErrorWarningLine/>;
        }
    }

    return (
        <div className="note" data-note={type.toString()}>
            <div className="note__title">
                {getIcon()}
                <p>{type.toString()}</p>
            </div>

            <div className="note__children">
                {children}
            </div>
        </div>
    );
}

export default Note;
