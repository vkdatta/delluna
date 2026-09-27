export const name="calendar-check-thin";
export const id="dl_e49f1fd1e42547bebe6b";
export const url=new URL("../icons/calendar-check-thin.svg?v=6a5e88548ff7abccd08bc5c8d348eaeca2e0b18a29a3b2fd41f4c09212d95d74",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
