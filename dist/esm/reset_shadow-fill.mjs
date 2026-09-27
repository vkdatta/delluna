export const name="reset_shadow-fill";
export const id="dl_3f1ef94d1cb5e5a0832c";
export const url=new URL("../icons/reset_shadow-fill.svg?v=68da32866528db3e832cd07ec1cf008a1eb16e29c286a8a5994e59a12cd25bc2",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
