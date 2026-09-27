export const name="wb_shade-fill";
export const id="dl_ab144092afc7876d699b";
export const url=new URL("../icons/wb_shade-fill.svg?v=1959c585d855b81b643db822713adbb3f913438a4bca1c041ec8454c25049c70",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
