export const name="raw_off";
export const id="dl_71bd252308dc43e0be8f";
export const url=new URL("../icons/material_symbols/raw_off.svg?v=4d85cc6ccc152c2003419331f04ad36389f562aa8d220da889febfa2683a6a89",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
