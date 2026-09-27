export const name="wifi_device";
export const id="dl_38bc524a2d8bbb77d2b4";
export const url=new URL("../icons/wifi_device.svg?v=2aa4cb85b41ac5677247b0a234f32863261b5bc288955ebc2526d6ed781f96aa",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
