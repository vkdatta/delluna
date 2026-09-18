export const name="wifi_add";
export const id="dl_7025f5bee0f44145b47f";
export const url=new URL("../icons/wifi_add.svg?v=8f5740ee55134af2f833f001da3fb66ba2ecc7acc139b22e6cbf150aa51566c1",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
