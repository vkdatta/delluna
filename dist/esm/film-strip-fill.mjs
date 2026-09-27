export const name="film-strip-fill";
export const id="dl_2e95cdb5b8bc4b43b31d";
export const url=new URL("../icons/film-strip-fill.svg?v=5be06e8b96a3a4f5770d16a56de0a4d4b869e5117aa31938a746a50b2f282c4b",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
