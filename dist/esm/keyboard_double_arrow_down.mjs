export const name="keyboard_double_arrow_down";
export const id="dl_d8b4c3fbb84b7810c120";
export const url=new URL("../icons/keyboard_double_arrow_down.svg?v=f174b80fb3f09374a178e6312e7cd071350ff48cb304211ad7a8d2f12cab1ef6",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
