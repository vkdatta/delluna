export const name="upload-simple-duotone";
export const id="dl_2985c7b59fb292ed88d3";
export const url=new URL("../icons/upload-simple-duotone.svg?v=8705cb37ba4e0ee2886263e7b086548658fee861f5de3b2dc1d660a4fdd75f61",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
