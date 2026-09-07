export const name="pause-circle-duotone";
export const id="dl_6724071b1561428c8d61";
export const url=new URL("../icons/pause-circle-duotone.svg?v=94175b4db6fae91ebadb9e08105285cef2c1e0c70598f0b1971a638e4168dc78",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
