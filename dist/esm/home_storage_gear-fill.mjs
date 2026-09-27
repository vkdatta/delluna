export const name="home_storage_gear-fill";
export const id="dl_fdc93918fea0c173330a";
export const url=new URL("../icons/home_storage_gear-fill.svg?v=906719b7b07ca00c75b0f1af3f24d406091b74e36870b6ec8a50ab07d6a0aee9",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
