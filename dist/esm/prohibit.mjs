export const name="prohibit";
export const id="dl_e463e9a5d9a647bd8add";
export const url=new URL("../icons/prohibit.svg?v=2f80a49b14c6744501b2e8b6308e05f026038ff1d89a6f44e48d3b1118be029f",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
