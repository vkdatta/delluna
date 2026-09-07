export const name="tea-bag-fill";
export const id="dl_f5727f13e89b46cc8deb";
export const url=new URL("../icons/T/tea-bag-fill.svg?v=0de0741e1738ab063b4b7909695be142b95553fa9171ab068dbd580498ac7de6",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
