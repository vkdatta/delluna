export const name="comedy_mask";
export const id="dl_ba1f45829d4940caa65a";
export const url=new URL("../icons/comedy_mask.svg?v=d83bd3b5621675764cc8713428291df528ccc5be8fe4951441f1171c9ee8dde0",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
