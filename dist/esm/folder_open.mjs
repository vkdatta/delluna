export const name="folder_open";
export const id="dl_f1e221680b386240b4f4";
export const url=new URL("../icons/folder_open.svg?v=4102545f0717ed2a0add827efd5d8b292d7b48b6a1bb001bc41421cf35d243b9",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
