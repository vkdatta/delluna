export const name="event-fill";
export const id="dl_0bdce0d204b2431eed5a";
export const url=new URL("../icons/event-fill.svg?v=d8735c34c502b640567b24de21975dec7e90047b14dc81b4dbfc7ea4c89b6a2c",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
