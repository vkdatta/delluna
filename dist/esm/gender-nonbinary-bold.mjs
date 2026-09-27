export const name="gender-nonbinary-bold";
export const id="dl_c7d892f375dc4a1fa70a";
export const url=new URL("../icons/gender-nonbinary-bold.svg?v=3de21e93d73e36948e3fa20e3970cd8917db612277394f0da094b555c28908e1",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
