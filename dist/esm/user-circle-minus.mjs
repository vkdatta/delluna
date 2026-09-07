export const name="user-circle-minus";
export const id="dl_5aabd598ebec49b8bee4";
export const url=new URL("../icons/U/user-circle-minus.svg?v=39e23f057d05d928769307018ae164db01fd45f474bd55dc878dc16d52b82a8a",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
