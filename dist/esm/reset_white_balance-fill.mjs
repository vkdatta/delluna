export const name="reset_white_balance-fill";
export const id="dl_a84154e5acc5cd202dcf";
export const url=new URL("../icons/reset_white_balance-fill.svg?v=7f77e9c239c63be875ccd2b53d320c33a1cc94f39e2ed71115847f564a1bf24b",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
