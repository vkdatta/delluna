export const name="keyboard_capslock_badge-fill";
export const id="dl_5c0e5970d90693c61e53";
export const url=new URL("../icons/keyboard_capslock_badge-fill.svg?v=283954ef401258a9d2b242f23106236d4d8ea9d136720c9fc55d5cf056bd839d",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
