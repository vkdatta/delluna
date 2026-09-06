export const name="arrow-bend-left-down";
export const id="dl_bfaa9f348a9f4d0ba45b";
export const url=new URL("../icons/arrow-bend-left-down.svg?v=c240151e09e96f879332a7dd0c949bb658338b783843148b8f45a8f7070ee891",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
