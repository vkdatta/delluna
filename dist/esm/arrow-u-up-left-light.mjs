export const name="arrow-u-up-left-light";
export const id="dl_9dc276ebab5e4703a051";
export const url=new URL("../icons/arrow-u-up-left-light.svg?v=5e9d76554510221778f5fef0d182cbcef2b6af93db81921e8b8093bdc90e53b8",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
