export const name="brand_awareness";
export const id="dl_111955e9ac82ffe0652d";
export const url=new URL("../icons/brand_awareness.svg?v=737949a24ca6d3ccfea8996819f486eaac28472a92f483620d34b14364705569",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
