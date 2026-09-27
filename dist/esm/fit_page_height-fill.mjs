export const name="fit_page_height-fill";
export const id="dl_a6dbd354ff5fa360909a";
export const url=new URL("../icons/fit_page_height-fill.svg?v=1618be9a75b3db48b6023696aba7cea39d810334bf71322b8291d1fecf575187",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
