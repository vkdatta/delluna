export const name="article-fill";
export const id="dl_bbb30c6dd1997a6192ed";
export const url=new URL("../icons/article-fill.svg?v=dcdcb0d25fe023aa58b49ebf37666f12286f6b7278a84d392a7e6f30db24f5ec",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
