export const name="rectangle_add-fill";
export const id="dl_3e5fe6e4a109c7d61b6b";
export const url=new URL("../icons/rectangle_add-fill.svg?v=f8a20b448ff703d4cb1202ccc36fcba98c920e2cf4aad7f177ab21883579f683",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
