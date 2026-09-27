export const name="venetian-mask";
export const id="dl_288ae75dbd534ef0a47b";
export const url=new URL("../icons/venetian-mask.svg?v=ec4084428eb687c7445721439295a2917a96ef8d2b016990802b1091865c7243",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
