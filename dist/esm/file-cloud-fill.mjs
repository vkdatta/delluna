export const name="file-cloud-fill";
export const id="dl_5b0a4b98afe64ceeb5fd";
export const url=new URL("../icons/file-cloud-fill.svg?v=65ccc844dca3701e51cd718af391b5f16c4864517f0e18034cf848cfb3c8a193",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
