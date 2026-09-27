export const name="user-switch";
export const id="dl_1d57e40348a55a003c1c";
export const url=new URL("../icons/user-switch.svg?v=42455de6a5899b00e4d0891989924a112c4f8c19f645e59ce618e3ff6ee99998",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
