export const name="perm_contact_calendar";
export const id="dl_97aa69b5ae1a21c42dd0";
export const url=new URL("../icons/perm_contact_calendar.svg?v=23278e5d05a1febe99b890ad5af1f7d3c09c31a4c21d7ba6c521e286cd06ddae",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
