export const name="play-circle-duotone";
export const id="dl_eabf745a837c4e8db1a0";
export const url=new URL("../icons/play-circle-duotone.svg?v=ee251c8e1b2d5acb995a483d64463c432c8323f609f04367050275961e24bb17",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
