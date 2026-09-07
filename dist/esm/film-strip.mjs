export const name="film-strip";
export const id="dl_4a70a4f17ecd44079820";
export const url=new URL("../icons/film-strip.svg?v=6d079e87432258b9fe9eff9d10ababcfbca7a400537277a215360a436581987f",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
