export const name="health_metrics-fill";
export const id="dl_06d1790fbf7036b6c96b";
export const url=new URL("../icons/health_metrics-fill.svg?v=638d330b7bbb8f81e861beacde7c33339e1165326a9fdd207efd89a1431b1023",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
