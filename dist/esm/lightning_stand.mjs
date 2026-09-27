export const name="lightning_stand";
export const id="dl_df180486db2f3a66442d";
export const url=new URL("../icons/lightning_stand.svg?v=2a20840089a73fb7fcbb5eb254b30554de59c16d04f0fdb23a012bd55a4ee65f",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
