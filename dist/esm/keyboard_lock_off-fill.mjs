export const name="keyboard_lock_off-fill";
export const id="dl_fd50a4cb6cd246b982be";
export const url=new URL("../icons/keyboard_lock_off-fill.svg?v=74210cb340b5367e41edadddb71ae31396dbaca97a671badf86443271180f21a",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
