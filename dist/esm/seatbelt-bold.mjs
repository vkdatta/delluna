export const name="seatbelt-bold";
export const id="dl_074b24cc1f1e95faf4cc";
export const url=new URL("../icons/seatbelt-bold.svg?v=fa3d21e7422546e4fed31c84e194167f0634c3da3e7f333ad4a419eba716ef24",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
