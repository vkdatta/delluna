export const name="sim_card";
export const id="dl_c06908c4b53427c28700";
export const url=new URL("../icons/sim_card.svg?v=c3d2f68a2ee0fcc54ad88b3f0dcd887da4d5c96452638e40da5992df25e5eae4",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
