export const name="scan-light";
export const id="dl_6d9b679c47624c6696b4";
export const url=new URL("../icons/S/scan-light.svg?v=b67ae4d515a1ecb1641c4303f2b5204e9c4b3024ae95a810ff02e9e4789b9aa5",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
