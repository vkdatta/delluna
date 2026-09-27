export const name="wifi_proxy-fill";
export const id="dl_d4d89d23977c5c6eed55";
export const url=new URL("../icons/wifi_proxy-fill.svg?v=1cf4febb4e91796f985398f738b1470149a2ecc84db89e2309bc421a41b687a3",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
