export const name="paint-brush-household";
export const id="dl_344e54f1fcea4b53bc06";
export const url=new URL("../icons/paint-brush-household.svg?v=724c1727135558148da12a2dc92eade321b83e4442510014abe65b7e518ab702",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
