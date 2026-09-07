export const name="scan-smiley-light";
export const id="dl_482decb106f8455ba8c8";
export const url=new URL("../icons/S/scan-smiley-light.svg?v=b92958b72a1879a6b6b957d9b1a29d8c5cf0fb13254be82e44643b10605f86a8",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
