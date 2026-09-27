export const name="biotech-fill";
export const id="dl_8f790c8f914712df3b8d";
export const url=new URL("../icons/biotech-fill.svg?v=9aabe7b622e332701fb9512eb04a60496da8e1c65ad897d33ae362f7493695f9",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
