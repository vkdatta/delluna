export const name="update";
export const id="dl_1405df11452890bd7965";
export const url=new URL("../icons/material_symbols/update.svg?v=8899fceec605646c2446e24c75ef7813e086fee3f2b572ef8edd178c50c20280",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
