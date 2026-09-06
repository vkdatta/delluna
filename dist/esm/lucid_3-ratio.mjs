export const name="lucid_3-ratio";
export const id="dl_969a55ab3b2645aeac52";
export const url=new URL("../icons/lucid_3-ratio.svg?v=630f2e3d648e30500108d974f9687702d744725910864f387ff804ba199915e3",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
