export const name="humidity_indoor-fill";
export const id="dl_cde3d80daa6f4195a91a";
export const url=new URL("../icons/humidity_indoor-fill.svg?v=f6b9789031c0e3daf481aa3844d787ab0bb576dd8806a45974b26a291e674f28",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
