export const name="backpack";
export const id="dl_3e91226480f84b99994e";
export const url=new URL("../icons/backpack.svg?v=082745f6c56bcefaeac5bb0ccba8ad34af94df65c63d1251eab04780a6edad83",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
