export const name="pinboard_unread";
export const id="dl_670c0491b94f1c07b1b7";
export const url=new URL("../icons/pinboard_unread.svg?v=dc2369711d8a901f33df4426abd1aea3044611d5fe076afc3138d263fbed5e5f",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
