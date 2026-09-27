export const name="film-strip";
export const id="dl_4a70a4f17ecd44079820";
export const url=new URL("../icons/film-strip.svg?v=1dd76bff6db9d2226dbbc1e0b27cc7299ce9f9efacdc668f43a1083351aafa5b",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
