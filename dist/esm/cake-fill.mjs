export const name="cake-fill";
export const id="dl_0018db462a1b4b118b3b";
export const url=new URL("../icons/cake-fill.svg?v=f3deeca29095263954d25e76761693f097525ba311d7ff053cdda63916ca68df",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
