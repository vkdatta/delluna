export const name="detector_smoke-fill";
export const id="dl_23a957320716c6b73a8a";
export const url=new URL("../icons/detector_smoke-fill.svg?v=88db3157c773cb2f81f64dfcf54e4a2ad284c9290196ebd5768864904a34d4ff",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
