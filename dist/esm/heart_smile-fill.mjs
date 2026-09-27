export const name="heart_smile-fill";
export const id="dl_43b25f499a3a3add3925";
export const url=new URL("../icons/heart_smile-fill.svg?v=e67f5306fade04f7574fc972273e594297da8d1599e4704292e2a36b2bb370c8",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
