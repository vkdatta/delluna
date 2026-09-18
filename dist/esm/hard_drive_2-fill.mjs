export const name="hard_drive_2-fill";
export const id="dl_0c882d988f6746699dba";
export const url=new URL("../icons/H/hard_drive_2-fill.svg?v=6ea3ffa73ed1c975758ce92b1cf39c24cfe19d9abfb9a1aa5f289e132f39388e",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
