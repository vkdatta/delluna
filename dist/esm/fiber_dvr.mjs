export const name="fiber_dvr";
export const id="dl_9a1be434456eefa50997";
export const url=new URL("../icons/fiber_dvr.svg?v=12decbbe16c5c09ead635571ec67c4deb4b2cc108b31761c55e669a7244b764f",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
