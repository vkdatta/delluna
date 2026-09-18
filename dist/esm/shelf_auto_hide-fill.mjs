export const name="shelf_auto_hide-fill";
export const id="dl_92f0b6551f034734902a";
export const url=new URL("../icons/shelf_auto_hide-fill.svg?v=88669079a80d6d1273534837b6eb3de8020ad34d9a1239b4130706375d0fd067",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
