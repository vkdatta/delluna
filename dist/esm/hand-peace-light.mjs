export const name="hand-peace-light";
export const id="dl_fda5109a05654ecab69d";
export const url=new URL("../icons/hand-peace-light.svg?v=6d5a7d817f67a23afc2a4fbe86d58fe618c02ca5f8d62b0f8751888d13e9cf9a",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
