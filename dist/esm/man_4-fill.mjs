export const name="man_4-fill";
export const id="dl_a7c711e4979f44b6b38b";
export const url=new URL("../icons/man_4-fill.svg?v=43ab0e10a3e190000d2221133a6fed7d8c6ed6929edc58954efef35638417021",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
