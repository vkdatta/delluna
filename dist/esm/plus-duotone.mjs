export const name="plus-duotone";
export const id="dl_55b6e04099f84935a49f";
export const url=new URL("../icons/plus-duotone.svg?v=e1dee25823800a7cfff6c5cce5693bb4daef55657e99bfde7c5b57d7c7e17998",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
