export const name="door_back";
export const id="dl_a3a90e7a756ea58bfa09";
export const url=new URL("../icons/door_back.svg?v=ef3e1d005a66347015f054896d2863a108741479c7f39deb9a008a003cc92770",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
