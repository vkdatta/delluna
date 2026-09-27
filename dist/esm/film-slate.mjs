export const name="film-slate";
export const id="dl_2ef6b07832084c868c66";
export const url=new URL("../icons/film-slate.svg?v=e327471084c7fb225aff9964b307047af4bb95434a1e3ca8781e1d8e7b869e35",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
