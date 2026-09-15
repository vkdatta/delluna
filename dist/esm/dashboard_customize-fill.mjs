export const name="dashboard_customize-fill";
export const id="dl_01b8c2fd75364c47ba73";
export const url=new URL("../icons/D/dashboard_customize-fill.svg?v=3b3a257dd2cc5b699c57a9300d4341aedca4de505fd5e2757e68ec8a4e468f99",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
