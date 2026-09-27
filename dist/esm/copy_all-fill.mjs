export const name="copy_all-fill";
export const id="dl_f46a38ca2c69d7b0ac61";
export const url=new URL("../icons/copy_all-fill.svg?v=a4284ec235b6d1cf00591cfdd8ad5c96d4f24bc3b319746ce803ef48ad3e844a",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
