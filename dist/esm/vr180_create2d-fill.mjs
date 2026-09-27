export const name="vr180_create2d-fill";
export const id="dl_60d16aae6c4665d9d6f5";
export const url=new URL("../icons/vr180_create2d-fill.svg?v=fa24c8256b382c850c96380f54d0c69fb97eed0b4543d216029320fae35cf2bc",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
