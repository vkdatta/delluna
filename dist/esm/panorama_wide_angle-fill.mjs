export const name="panorama_wide_angle-fill";
export const id="dl_785351b0ee64ab09742a";
export const url=new URL("../icons/panorama_wide_angle-fill.svg?v=c188605a7e1109418e9382e3a6e520a7055bdafd27e44adc3a5e975280ecc05c",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
