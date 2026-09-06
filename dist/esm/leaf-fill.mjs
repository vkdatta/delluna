export const name="leaf-fill";
export const id="dl_96e59f2630ca4f8a975c";
export const url=new URL("../icons/leaf-fill.svg?v=4158fa6059b4f921314b6cf638a094147a7577efa3d887fa929ec542d0359c91",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
