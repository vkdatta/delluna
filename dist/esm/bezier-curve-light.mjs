export const name="bezier-curve-light";
export const id="dl_510330b6f05342a88546";
export const url=new URL("../icons/bezier-curve-light.svg?v=d7337904ddb4edcce39830d97eac46816ce498f14080e9e3f9688d1d4864e0bd",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
