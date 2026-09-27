export const name="cards-three";
export const id="dl_de76b67845094f53bce2";
export const url=new URL("../icons/cards-three.svg?v=e7bc38e8141862cd8226c1e44b60ed500677f37f8307cdb5ccc16f7cf7103c83",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
