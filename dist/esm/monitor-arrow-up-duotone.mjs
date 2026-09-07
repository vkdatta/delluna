export const name="monitor-arrow-up-duotone";
export const id="dl_e7a7cfac107b40339a96";
export const url=new URL("../icons/monitor-arrow-up-duotone.svg?v=376e578604b5e8d0aa7630cecf1ee3453aecc497cf47936b0e58c2a3ecc76fe7",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
