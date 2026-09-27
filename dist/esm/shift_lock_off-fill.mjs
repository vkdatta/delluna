export const name="shift_lock_off-fill";
export const id="dl_e9915a29a4cab7259253";
export const url=new URL("../icons/shift_lock_off-fill.svg?v=3ce6ade89e58674a8ef2e729274a90d41d5c2c227124e1554a6e5bb3c2b1eee9",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
