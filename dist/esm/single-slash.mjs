export const name="single-slash";
export const id="dl_4141a9975105469facc6";
export const url=new URL("../icons/close/single-slash.svg?v=579f955efd1924a244bfe24649298f891f24bfed952868b54410e63173cbdb28",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
