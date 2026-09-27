export const name="pen-fill";
export const id="dl_101127f5f890442eaacd";
export const url=new URL("../icons/pen-fill.svg?v=a09b658a87aee6b74d364aa02f2adfb00b831757e8a9a10101708f870018b31c",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
