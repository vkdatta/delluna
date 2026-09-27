export const name="ink_highlighter-fill";
export const id="dl_e56ddec1e545ecf47ef8";
export const url=new URL("../icons/ink_highlighter-fill.svg?v=b6cbb88e50a10fe13ca333072aa4b28791b88fb24276d2d278f9bb6e3a691987",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
