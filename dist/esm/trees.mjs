export const name="trees";
export const id="dl_be6bf339c27e48288952";
export const url=new URL("../icons/trees.svg?v=6ed54692c6b0ff006718d281f285ec655d00c4e917e82dbe86790c733ee64d90",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
