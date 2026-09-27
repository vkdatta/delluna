export const name="foot_bones";
export const id="dl_7f0be4f717fafcc1fc66";
export const url=new URL("../icons/foot_bones.svg?v=714c2f3df5cebf717b9625b8ee705b19b295a11e10518ac82134e1487da023a9",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
