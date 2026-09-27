export const name="microphone-slash-fill";
export const id="dl_7ef5816d391143d3bb06";
export const url=new URL("../icons/microphone-slash-fill.svg?v=97b007e310968091bf66788904b304ed5efa458e989f022865f8b50677915f0f",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
