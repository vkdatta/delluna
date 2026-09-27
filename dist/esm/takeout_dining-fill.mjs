export const name="takeout_dining-fill";
export const id="dl_5caccac8148a85b8f048";
export const url=new URL("../icons/takeout_dining-fill.svg?v=64cbd22c3c7f4f6046c3bedd4b46d862279f53f00636351a7550ce18b30d8de5",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
