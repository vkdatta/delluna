export const name="keyboard_alt-fill";
export const id="dl_09bcddddd569bf173ac9";
export const url=new URL("../icons/keyboard_alt-fill.svg?v=282f29a3883e341e02f18fbfc7f5f871bc5797c667ce5460815cc0e5143e13ae",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
