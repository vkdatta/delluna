export const name="shrimp-light";
export const id="dl_99ebea408e840e93afd6";
export const url=new URL("../icons/shrimp-light.svg?v=c6c605dfb2e60072a7b07da7318d434f8dfd36e661211556ecb4381f603d5e3c",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
