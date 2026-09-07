export const name="calendar-slash-thin";
export const id="dl_d898f3e32f264df8ae73";
export const url=new URL("../icons/calendar-slash-thin.svg?v=5271848101eebc8f54f839aef41d8a87ad4803b9b6dc1c1f645a921e5730e79e",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
