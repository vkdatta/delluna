export const name="file-dashed";
export const id="dl_4ec3306f2bf145f59584";
export const url=new URL("../icons/file-dashed.svg?v=43568f4b5b01bb9dcba057c2ec3305c16b3df7d0814623d54932b406eeb5cdc2",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
