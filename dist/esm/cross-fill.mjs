export const name="cross-fill";
export const id="dl_216208947dd34821a2b2";
export const url=new URL("../icons/cross-fill.svg?v=e6e2e392f1c22c0276ff5a4313f10198f0984de4ac1892573477e5cc5beca517",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
