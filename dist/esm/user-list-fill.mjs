export const name="user-list-fill";
export const id="dl_c8f16a44ac0d407f980b";
export const url=new URL("../icons/U/user-list-fill.svg?v=9d289e85359dcd8ed23bb85339915d6be3c543716cf0cad0c3f5a6b882215f7c",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
