export const name="perm_contact_calendar";
export const id="dl_896cdbc76b9a8ce98bd1";
export const url=new URL("../icons/perm_contact_calendar.svg?v=a0ec86d3c14c7c4b13f87d050b99cab50640ac5d6d0d779d5102862bcf48017b",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
