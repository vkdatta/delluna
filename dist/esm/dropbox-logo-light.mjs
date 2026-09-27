export const name="dropbox-logo-light";
export const id="dl_4908420761804dc5977b";
export const url=new URL("../icons/dropbox-logo-light.svg?v=326db62763e2847d71c6e9eba1ccb2042aadad50aa3db99ec135ff0b57d4970d",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
