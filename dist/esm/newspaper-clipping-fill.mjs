export const name="newspaper-clipping-fill";
export const id="dl_8ea6e601977545f68566";
export const url=new URL("../icons/newspaper-clipping-fill.svg?v=056ebfac5acb490987abfab92d65a15b5412a27054a5a35a9d8c47659209f218",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
