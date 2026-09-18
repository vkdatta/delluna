export const name="instant_mix-fill";
export const id="dl_02aa12c375fa47d380c7";
export const url=new URL("../icons/I/instant_mix-fill.svg?v=7dc6b000a125ddfc13665ab39a7c680c42515762a1a1cbcf4e23ec2054581339",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
