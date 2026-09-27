export const name="ear-duotone";
export const id="dl_df196144f3694bf1b806";
export const url=new URL("../icons/ear-duotone.svg?v=858bdbd0026e725953446df37438d8cb02826c33b5787b881cea4ec04dd05a4d",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
