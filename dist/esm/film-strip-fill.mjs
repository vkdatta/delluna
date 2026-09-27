export const name="film-strip-fill";
export const id="dl_2e95cdb5b8bc4b43b31d";
export const url=new URL("../icons/film-strip-fill.svg?v=bf7e13c13435c563f42e40a9692db87ae4a4c0c02562f101c5e445d9d3714618",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
