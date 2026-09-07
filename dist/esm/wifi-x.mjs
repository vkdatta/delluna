export const name="wifi-x";
export const id="dl_8398a823697f41a5919a";
export const url=new URL("../icons/W/wifi-x.svg?v=4b8dfd2d54bfde1e8d28444342c259ea94879184bf4f5fc2e34991dda4357528",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
