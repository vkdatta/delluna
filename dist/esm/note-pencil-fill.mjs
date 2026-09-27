export const name="note-pencil-fill";
export const id="dl_c1199b621276455cb17d";
export const url=new URL("../icons/note-pencil-fill.svg?v=893051497783947b0fc04761c203633df4b8d2ce47733aab17cc6ceaf62c51b1",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
