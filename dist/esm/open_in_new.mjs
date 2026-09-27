export const name="open_in_new";
export const id="dl_3df3c5281358e9d0f4dc";
export const url=new URL("../icons/material_symbols/open_in_new.svg?v=aaeaae468a32c5516a59514c4cfc28db6454daef927f45f90d5a77aa6327fd57",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
