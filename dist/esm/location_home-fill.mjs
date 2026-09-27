export const name="location_home-fill";
export const id="dl_ad9461ff47ad58a015d8";
export const url=new URL("../icons/location_home-fill.svg?v=c602944712d24bc90628e6db16d5f05fb26f58d6c2da6d8c33280817246480cd",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
