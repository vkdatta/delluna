export const name="intersection-light";
export const id="dl_f738003e190a41c5af09";
export const url=new URL("../icons/intersection-light.svg?v=c9b76eded1d023f06a58d295a53aab542a678d15428bfc23c4160ef28ef31280",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
