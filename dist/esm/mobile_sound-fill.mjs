export const name="mobile_sound-fill";
export const id="dl_4057775f4f0d71d7622b";
export const url=new URL("../icons/mobile_sound-fill.svg?v=589aa8730b018bbeaa0d6e42c0a899799e9cbd6ee3c4fe2d358a11a0b2f50582",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
