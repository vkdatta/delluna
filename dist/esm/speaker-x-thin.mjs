export const name="speaker-x-thin";
export const id="dl_f7745bbbdc6c92b55266";
export const url=new URL("../icons/speaker-x-thin.svg?v=e9622727eae39637232aeac5ac67ab3e494787e21b701722a03814afb8eb3ca9",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
