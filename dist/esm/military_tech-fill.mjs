export const name="military_tech-fill";
export const id="dl_b24f62234d8d6c50d7ee";
export const url=new URL("../icons/military_tech-fill.svg?v=058096587eda733f02753f0479ebc8d6960ff5c62549b2a6893bf5c665fd6d6c",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
