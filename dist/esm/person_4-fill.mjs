export const name="person_4-fill";
export const id="dl_d46946fc03414d2ae73b";
export const url=new URL("../icons/person_4-fill.svg?v=e4c822d960d7c354949a9f5dc8599718fee8c4c4a766eed02b9385c1b952d72d",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
