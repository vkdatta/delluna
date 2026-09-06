export const name="gif-fill";
export const id="dl_5272d5f761e849ec8bf0";
export const url=new URL("../icons/gif-fill.svg?v=3f84958c818a3763f68a28d5f4113738c15b684f5435d71b1eecdec1e8c0d9e3",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
