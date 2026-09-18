export const name="spatial_tracking-fill";
export const id="dl_26adf2cdf380439f9bf7";
export const url=new URL("../icons/spatial_tracking-fill.svg?v=369f9d2383476ad95955835164334a7fa1e52c7e4c31fb7297e7b864d2c3651e",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
