export const name="open_in_new";
export const id="dl_1db361e4477f45439900";
export const url=new URL("../icons/material_symbols/open_in_new.svg?v=8b464b3779cc1d22fe0a84d722d6bc0f7fb425e7dafa46298636d376a3808458",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
