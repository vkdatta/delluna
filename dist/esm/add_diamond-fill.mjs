export const name="add_diamond-fill";
export const id="dl_ac0de283efb4426db5fc";
export const url=new URL("../icons/add_diamond-fill.svg?v=c0e69582a0d42e278e9ad4c751eeb588c9a2e4886f3fbee79324e0177c7936d5",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
