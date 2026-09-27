export const name="megaphone-fill";
export const id="dl_ffe64943cb804b619eb5";
export const url=new URL("../icons/megaphone-fill.svg?v=75cee9a78ceeec901bd4ee0cfa593d656db114832cce93db2e593bc1e4310dbd",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
