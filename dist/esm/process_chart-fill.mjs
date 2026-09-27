export const name="process_chart-fill";
export const id="dl_a2118dd59272724969d0";
export const url=new URL("../icons/process_chart-fill.svg?v=1164ee49780c07de9be02d55ed60bf901184550ed289bac49813151af9df0667",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
