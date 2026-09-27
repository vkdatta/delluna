export const name="tablet_mac-fill";
export const id="dl_422ea4fa2e64fdb7ab60";
export const url=new URL("../icons/tablet_mac-fill.svg?v=070988abaa4f122d0b550e9dd09495f9e23cbb5d54954bade2f8e4adc4b5ad53",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
