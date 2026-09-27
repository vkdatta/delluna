export const name="briefcase";
export const id="dl_109158fa36e143a0b9f0";
export const url=new URL("../icons/briefcase.svg?v=45a83133be70ce2b9cb05787b65641936cbb1945cd12115f9a6df93dae0b3ea9",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
