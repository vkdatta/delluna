export const name="twitter-logo-thin";
export const id="dl_084923c54a024c8e43d6";
export const url=new URL("../icons/twitter-logo-thin.svg?v=222c5c8e171b52f64555df76639114690619d308979cacbfb66ac4c4200674ff",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
