export const name="dots-three-circle-vertical-duotone";
export const id="dl_2e5ce492d4334c0a8f79";
export const url=new URL("../icons/dots-three-circle-vertical-duotone.svg?v=7775f3d609f6f972bb2899a5d8ac04f9485eb7627794602e15adb8b68d5a78a4",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
