export const name="newspaper-clipping-light";
export const id="dl_783c7b36b7b7418db36b";
export const url=new URL("../icons/newspaper-clipping-light.svg?v=17722be15677d4e63f4856be17cfbbe740d9cc8483d497a11dbe98f62b41db5b",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
