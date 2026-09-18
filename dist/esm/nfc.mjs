export const name="nfc";
export const id="dl_689468b2f37441f5bec4";
export const url=new URL("../icons/N/nfc.svg?v=7d1f87175c87572866fe020ee77db80bdb891a541788609596f7bc0b80f531e7",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
