export const name="diversity_2-fill";
export const id="dl_e0b371584b3958e43e2d";
export const url=new URL("../icons/diversity_2-fill.svg?v=5b9291ec9606b8f827547f01538562c21899a5e70620c59f24f35c094005412a",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
