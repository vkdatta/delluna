export const name="arrow-bend-up-right";
export const id="dl_daf69dc717f14490ab2e";
export const url=new URL("../icons/arrow-bend-up-right.svg?v=e19fba962db5524d03e15abca9f983fa7257ba084a4862f4a8bf51bc3e5e87b0",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
