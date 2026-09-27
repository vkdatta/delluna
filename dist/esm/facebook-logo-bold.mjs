export const name="facebook-logo-bold";
export const id="dl_de6eb3496b854c4fb2dc";
export const url=new URL("../icons/facebook-logo-bold.svg?v=ddf20f03b7f9d309e6656533470ce756e56b60015ab001be02a3d25732027d71",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
