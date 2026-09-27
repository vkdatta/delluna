export const name="lucid_3-ratio";
export const id="dl_969a55ab3b2645aeac52";
export const url=new URL("../icons/lucid_3-ratio.svg?v=3766b7ddda2db2baaa50b51e4e84afd9e32ffece9fd480d4477aba0e76915090",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
