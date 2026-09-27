export const name="battery-full-light";
export const id="dl_1fa4ab1a91f0429586ed";
export const url=new URL("../icons/battery-full-light.svg?v=480276b0b205ab9c7150e14f3ec7bd339cfce3c3cf158c31d6f6951d12f0fe8f",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
