export const name="format_list_bulleted-fill";
export const id="dl_cdfc151a72609a09207f";
export const url=new URL("../icons/format_list_bulleted-fill.svg?v=e18b0b5579c859ca6c44f31b8f583b6c941e0fe72e0ba223ca7d4e20fa46518c",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
