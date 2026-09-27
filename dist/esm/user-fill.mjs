export const name="user-fill";
export const id="dl_6fab81fa49d0a57d96e6";
export const url=new URL("../icons/user-fill.svg?v=6522922997dd5ac574bb18f498b3403ac2ed8cc7ac37493fc0b3c15fa7e68fc4",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
