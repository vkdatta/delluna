export const name="movie_info";
export const id="dl_3ce5c0f2ef874185867e";
export const url=new URL("../icons/movie_info.svg?v=cda42bc4cd50588117d5ad5f4d03393ae1f9b430ade06ce52c06e14bd534494a",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
