export const name="film-strip-duotone";
export const id="dl_40057271dbaf4084ae5e";
export const url=new URL("../icons/film-strip-duotone.svg?v=ec35dba6303f226b6dcc33f16eca1f1e550821d4349cb641654750e730b6d4e3",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
