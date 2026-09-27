export const name="lucid_2-face-neutral";
export const id="dl_2d0b6b9800434e7a8f5b";
export const url=new URL("../icons/lucid_2-face-neutral.svg?v=be0cbada5ba9671818b1205082f086f14db6a2eac699c4a83af7a4c2640a8ed6",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
