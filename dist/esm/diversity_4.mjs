export const name="diversity_4";
export const id="dl_70a0aa480aa2c9867802";
export const url=new URL("../icons/diversity_4.svg?v=955b751d01019a5bb2d12e6d4d4c4e74e21f1ba40250b570f0b6bb20f6259cd9",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
