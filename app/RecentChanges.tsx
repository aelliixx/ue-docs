import React from "react";
import {Octokit} from "octokit";
import Link from "next/link";

const octokit = new Octokit({auth: process.env.GH_AUTH})

async function getCommits(repo: string) {
    const res = await octokit.request("GET /repos/{owner}/{repo}/commits", {
        owner: 'aelliixx',
        repo,
        headers: {
            'X-GitHub-Api-Version': '2022-11-28'
        }
    });
    if (res.status !== 200)
        throw new Error("Failed to fetch changes.");
    return res.data;
}

export default async function RecentChanges({repo}: {repo: string}) {


    const commits = await getCommits(repo);

    const getDeltaTime = (date?: string): string => {
        const then = new Date(date!);
        const delta = Date.now() - then.getTime();

        const minutes = delta / 1000 / 60;
        if (minutes < 60)
            return minutes.toFixed(0) + (Math.trunc(minutes) > 1 && Math.trunc(minutes) !== 0 ? " minutes ago." : " minute ago");
        const hours = minutes / 60;
        if (hours < 24)
            return hours.toFixed(0) + (Math.trunc(hours) > 1 ? " hours ago." : " hour ago.");
        const days = hours / 24;
        if (days < 31)
            return days.toFixed(0) + (Math.trunc(days) > 1 ? " days ago." : " day ago.");
        const months = days / 30.4375;
        if (months < 12)
            return months.toFixed(0) + (Math.trunc(months) > 1 ? " months ago." : " month ago.");
        const years = days / 365.25;
        return years.toFixed(0) + (Math.trunc(years) > 1 ? " years ago." : " year ago.");
    }

    const textReducer = (str: string): string => {
        if (str.length > 120) {
            return str.slice(0, 120) + "...";
        }
        else return str;
    }

    return (
        <div className="commit_container">
            <h4>aelliixx/{repo}</h4>
            {
                commits.map((c) =>
                    <div key={c.sha} className="commit">
                        <div className="commit__message">
                            <Link href={c.html_url}>{c.commit.message}</Link>
                            <p>{c.commit.author?.name}</p>
                        </div>
                        <p>{getDeltaTime(c.commit.author?.date)}</p>
                    </div>)
            }
        </div>
    );
}