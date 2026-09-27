export const name="arrow-square-up-duotone";
export const id="dl_4ace8b0ea33548baabeb";
export const url=new URL("../icons/arrow-square-up-duotone.svg?v=7e89bd884c43c130a347c59f3fbe3d4ef1244ef37452b04d5f92e1130dbcf801",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
