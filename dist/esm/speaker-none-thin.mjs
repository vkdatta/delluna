export const name="speaker-none-thin";
export const id="dl_762539a69d931a34f271";
export const url=new URL("../icons/speaker-none-thin.svg?v=1cb667b00762901c5c752954e5f5d20960290f7e68a2186bd6d2ba607a1673d4",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
