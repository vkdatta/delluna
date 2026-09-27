export const name="backpack-bold";
export const id="dl_4f4d422d433743b6a126";
export const url=new URL("../icons/backpack-bold.svg?v=ee55e29b3044a159dd12bb8346e521a184f895a8225cfda98a00e153d5fa2aca",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
