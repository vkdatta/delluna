export const name="toggle-left-thin";
export const id="dl_4c67bef523df45901566";
export const url=new URL("../icons/toggle-left-thin.svg?v=4b5811ab1c2ce32ab8827cb08f8c42d0dcb5ad44533946a16bbea5522e9b783f",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
