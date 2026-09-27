export const name="full_hd";
export const id="dl_51d577ae8c3abb1c2d66";
export const url=new URL("../icons/full_hd.svg?v=66ad3b618a5b4f89d6be427e0b18f9ca5c0e1c4fb641d518e93d6c4f8945f6e8",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
