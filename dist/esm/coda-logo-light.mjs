export const name="coda-logo-light";
export const id="dl_254b5a3269644cd08816";
export const url=new URL("../icons/coda-logo-light.svg?v=a75e9b87a855b0a9c5762635c9f7e473a30e2dc590a7ec82f3bdfee35d5eb35e",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
