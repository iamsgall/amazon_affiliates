import { DiscussionEmbed } from 'disqus-react'

export default function Disqus({ url, identifier, title }) {
  return (
    <DiscussionEmbed
      shortname='amazon-affiliates'
      config={{
        url: url,
        identifier: identifier,
        title: title,
        language: 'es', //e.g. for Traditional Chinese (Taiwan)
      }}
    />
  )
}
