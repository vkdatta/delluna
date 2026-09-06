export const name="ambulance-thin";
export const id="dl_5d6bfd22cb71447f907f";
export const url=new URL("../icons/ambulance-thin.svg?v=7e7fb8815608574e0c015a745a0b5baab5c9fb777115d9361c9a42a5c1345821",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
