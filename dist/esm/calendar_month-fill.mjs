export const name="calendar_month-fill";
export const id="dl_18f9312cd2bc7b18ce8e";
export const url=new URL("../icons/calendar_month-fill.svg?v=916520be154157a34f5933e4c95da7bea313482f0cf62cdc716f5ad2c887c850",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
