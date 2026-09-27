export const name="mobile_vibrate-fill";
export const id="dl_219d4576cf37b2d75254";
export const url=new URL("../icons/mobile_vibrate-fill.svg?v=7003eee7260e6ff4d7b3316badbe2363824a9c2eb69652478627249aad095bfd",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
