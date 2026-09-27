export const name="caret-circle-double-right-duotone";
export const id="dl_1ad617691153480ebd5a";
export const url=new URL("../icons/caret-circle-double-right-duotone.svg?v=125ced6b8006df28a3cef1491389b9964533976a79666789b416d5de92b2cd08",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
