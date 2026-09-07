export const name="phone-thin";
export const id="dl_e461077c950c4ab9b30a";
export const url=new URL("../icons/phone-thin.svg?v=a23393e6568092f19ac2b526fa401004103a7c2dd4b2ccf46f269f3071465066",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
