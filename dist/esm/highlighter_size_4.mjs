export const name="highlighter_size_4";
export const id="dl_bb520e460f8564ac81df";
export const url=new URL("../icons/highlighter_size_4.svg?v=c17d5889277859571c965c82c1460484f79549e0891e969a93764bb305e6493b",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
