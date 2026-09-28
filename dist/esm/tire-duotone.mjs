export const name="tire-duotone";
export const id="dl_892b55dfd7a69cab0c8c";
export const url=new URL("../icons/tire-duotone.svg?v=c20a31970c997bc3277575ebeb6be3e993c1f6564ec408d94fc432617cb5b84d",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
