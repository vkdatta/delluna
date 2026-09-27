export const name="calendar-blank";
export const id="dl_4d9fce0261394a8e8ee9";
export const url=new URL("../icons/calendar-blank.svg?v=1b86ace48302c835d9242099f52ee63100337143abe877af12ae6028a9e91e1b",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
