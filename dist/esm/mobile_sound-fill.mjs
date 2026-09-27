export const name="mobile_sound-fill";
export const id="dl_a2ef4e66393241b2e7e1";
export const url=new URL("../icons/mobile_sound-fill.svg?v=4c473c244a9027d23001a98d206fa3610e83e0672fb2baeb5dec22bf964121ba",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
