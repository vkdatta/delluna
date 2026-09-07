export const name="seatbelt-bold";
export const id="dl_b47ccf1608ec4d0eba0c";
export const url=new URL("../icons/S/seatbelt-bold.svg?v=fa3d21e7422546e4fed31c84e194167f0634c3da3e7f333ad4a419eba716ef24",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
