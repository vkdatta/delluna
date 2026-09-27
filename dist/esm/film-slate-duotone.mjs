export const name="film-slate-duotone";
export const id="dl_211fadb12dd34145b442";
export const url=new URL("../icons/film-slate-duotone.svg?v=96078f87e861ab3d6828ecc9009766502db69bd4c829df200a87df71a6d7bae8",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
