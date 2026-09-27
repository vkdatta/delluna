export const name="film-strip";
export const id="dl_4a70a4f17ecd44079820";
export const url=new URL("../icons/film-strip.svg?v=5422ebabd943bf94f520c6c644270b3f8ef4908cd918d400cecc77f63a06065f",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
