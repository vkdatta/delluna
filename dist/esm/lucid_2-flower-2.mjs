export const name="lucid_2-flower-2";
export const id="dl_cd8b993ca9a049afa77e";
export const url=new URL("../icons/lucid_2-flower-2.svg?v=8e8352c7ca8ef944452e02aba14ec44f32094281dba2c59af365e5c02cdbfbc0",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
