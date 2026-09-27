export const name="network_wifi_1_bar-fill";
export const id="dl_48175a5380986fb3ccac";
export const url=new URL("../icons/network_wifi_1_bar-fill.svg?v=e181e7bd070ef2a455b17fa861c7aa8c314de7eb5a286ea2d685af42903a1dbb",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
