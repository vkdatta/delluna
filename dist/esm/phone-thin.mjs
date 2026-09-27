export const name="phone-thin";
export const id="dl_e461077c950c4ab9b30a";
export const url=new URL("../icons/phone-thin.svg?v=9c1f2afced0c4e135718ebff5367f81767328dbf39a2b02752d592e7e1716874",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
