export const name="keyboard_tab_rtl-fill";
export const id="dl_c07fa45857324b9cb7f6";
export const url=new URL("../icons/keyboard_tab_rtl-fill.svg?v=57bd91dfa194234ea7c9b90ede31f4e2125fed6597179bc6d5e5d317c013ffd8",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
