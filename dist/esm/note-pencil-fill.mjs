export const name="note-pencil-fill";
export const id="dl_c1199b621276455cb17d";
export const url=new URL("../icons/note-pencil-fill.svg?v=6ea560be3a27f7c11d7ba5800cad720fb221a13b11d42c631148fceef1c4bff3",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
