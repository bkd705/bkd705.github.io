// @flow
import React from 'react'
import type { Element } from 'react'
import './sociallinks.css'

type linkType = {
  account: string
}

const TwitterLink = ({ account }: linkType): Element<any> => {
  return (
    <p>
      <strong>Twitter:</strong>
      {' '}
      <a
        href={`https://twitter.com/${account}`}
        title={`Link to ${account}'s Twitter profile.`}
      >
        @{account}
      </a>
    </p>
  )
}

const LinkedInLink = ({ account }: linkType): Element<any> => {
  return (
    <p>
      <strong>LinkedIn:</strong>
      {' '}
      <a
        href={`https://linkedin.com/in/${account}`}
        title={`Link to ${account}'s LinkedIn profile.`}
      >
        {account}
      </a>
    </p>
  )
}

const GithubLink = ({ account }: linkType): Element<any> => {
  return (
    <p>
      <strong>Github:</strong>
      {' '}
      <a
        href={`https://github.com/${account}`}
        title={`Link to ${account}'s Github profile.`}
      >
        {account}
      </a>
    </p>
  )
}

type socialLinksType = {
  twitter?: string,
  linkedin?: string,
  github?: string
}

const SocialLinks = ({
  twitter,
  linkedin,
  github
}: socialLinksType): Element<any> => {
  const twitterLink = twitter ? <TwitterLink account={twitter} /> : ''
  const linkedInLink = linkedin ? <LinkedInLink account={linkedin} /> : ''
  const githubLink = github ? <GithubLink account={github} /> : ''
  return (
    <div className="social-links">
      {twitterLink}
      {linkedInLink}
      {githubLink}
    </div>
  )
}

export default SocialLinks
