export const name="align-left-duotone";
export const id="dl_c74ebfb920804023b950";
export const url=new URL("../icons/align-left-duotone.svg?v=ae46dce867e08a92aeb58556e65c240f9c55b4f0f816f987ea0a6fbd3ea28a70",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
