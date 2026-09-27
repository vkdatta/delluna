export const name="arrow-u-left-up";
export const id="dl_74f0315fb02747c89ba6";
export const url=new URL("../icons/arrow-u-left-up.svg?v=f51a10895ddc379187aac13a54d54b27b08ce359710ff5c01f8835c84c81cd24",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
