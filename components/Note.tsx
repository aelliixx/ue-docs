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
            <style jsx>{`

              .note[data-note="Note"] {
                --note-colour: 0 0% 96%;
              }

              .note[data-note="Warning"] {
                --note-colour: 36 100% 68%;
              }
              
              .note[data-note="Deprecated"],
              .note[data-note="Danger"] {
                --note-colour: 351 100% 66%;
              }

              .note[data-note="Tip"] {
                --note-colour: 120 73% 60%;
              }

              .note[data-note="Disclaimer"] {
                --note-colour: 18 100% 85%;
              }

              .note {
                position: relative;
                background: hsl(var(--note-colour) / 0.5);
                margin-block: 1rem;
                padding-block: 0.75rem;
                padding-inline: 1.25rem;
                border-radius: 0.5rem;
                overflow: hidden;
              }

              .note::before {
                content: '';
                position: absolute;
                top: 0;
                left: 0;
                bottom: 0;
                width: 7px;
                background-color: hsl(var(--note-colour));
              }

              .note__title {
                display: flex;
                align-items: center;
                gap: 0.5rem;
                font-size: 1.25rem;
                font-weight: 500;
              }

              .note__children {
                display: flex;
                flex-direction: column;
                gap: 0.5rem;
              }
            `}</style>
        </div>
    );
}

export default Note;
