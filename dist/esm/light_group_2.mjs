export const name="light_group_2";
export const id="dl_96a48d5d1df9279f8181";
export const url=new URL("../icons/light_group_2.svg?v=da5008f5aceeba8fc4c61b37127196840b5e499fb570d2eabaca091fe91c861b",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
