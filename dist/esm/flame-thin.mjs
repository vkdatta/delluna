export const name="flame-thin";
export const id="dl_263c48372b38482284f7";
export const url=new URL("../icons/flame-thin.svg?v=115644dbbc29fc6b469b4318491b0c9aa2ca8dc979914eb9a44df47cf811c91a",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
