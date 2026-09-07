export const name="tag-bold";
export const id="dl_bd8004f8166c445dbc06";
export const url=new URL("../icons/T/tag-bold.svg?v=75ecd1fbfc0df822aa5671c73530cf9d7d7149e95556d2c4e2159510c8ab6aaf",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
