export const name="crossword-fill";
export const id="dl_196a0b69fd68797c0ea3";
export const url=new URL("../icons/crossword-fill.svg?v=fa90f50701f2479283191e32ca6ce4d33990ddd288e67239fa209fd405e7d4a8",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
