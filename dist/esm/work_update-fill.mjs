export const name="work_update-fill";
export const id="dl_fe669ab0283b6ddeee57";
export const url=new URL("../icons/work_update-fill.svg?v=af0c4f78df8fd66795a5f6d7981078062f0b9fe9fef00da24a9725051a0f770b",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
