export const name="center_focus_weak-fill";
export const id="dl_7cc2a2fc926b110d4cb2";
export const url=new URL("../icons/center_focus_weak-fill.svg?v=e6afbdee7ea336d7fe29c47b997b964b1059f2a3a35d129b53da394b272f4af7",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
