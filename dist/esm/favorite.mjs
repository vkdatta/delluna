export const name="favorite";
export const id="dl_62cc2ac24a0e49bf858c";
export const url=new URL("../icons/F/favorite.svg?v=4f3bf0356331edb3d97ce2d050b7d705c454eeaf88e4e2b522e7beae113628e1",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
