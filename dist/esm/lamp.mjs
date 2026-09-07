export const name="lamp";
export const id="dl_c24efe15b70f43d5835e";
export const url=new URL("../icons/lamp.svg?v=4fdfab2f47ae7c8041b7e949032d8abe780515ec518ac0be41ed58124e5e8846",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
