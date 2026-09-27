export const name="calendar-dots-fill";
export const id="dl_1a561fcea7864a18b3e0";
export const url=new URL("../icons/calendar-dots-fill.svg?v=b10b00567746b500a884715ac3a7b1a00ca33a22a88789afcac69f1d20c90b46",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
