export const name="hearing_disabled-fill";
export const id="dl_4c1575cfa7ad41a88eb4";
export const url=new URL("../icons/H/hearing_disabled-fill.svg?v=55f4b4083ad77a1e329d97768498fbf68ec202b21c9478f79ed5f90013309432",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
