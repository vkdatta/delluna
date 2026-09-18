export const name="curtains_closed-fill";
export const id="dl_9b5238317ed945919524";
export const url=new URL("../icons/curtains_closed-fill.svg?v=4da47f513504541a2fded7835e113bdc56a042afbd969ceda9cbb927b42f7d02",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
