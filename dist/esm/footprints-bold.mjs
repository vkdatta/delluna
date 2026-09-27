export const name="footprints-bold";
export const id="dl_22afb1cf6a2d4a07b0b9";
export const url=new URL("../icons/footprints-bold.svg?v=40cce679c73ac67aed8d4de6e1ca2b3509170737d36b8f211f26281bdfb2c933",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
