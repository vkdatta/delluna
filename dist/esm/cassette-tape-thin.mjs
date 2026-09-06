export const name="cassette-tape-thin";
export const id="dl_9d90832032684d69bdf7";
export const url=new URL("../icons/cassette-tape-thin.svg?v=13c8ec5211f192c4af9c9c0d839a23e6af0f970517a9d27864fe40ed2bfd2d54",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
