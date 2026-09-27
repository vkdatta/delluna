export const name="sync";
export const id="dl_e4443e729ef9674a6d14";
export const url=new URL("../icons/sync.svg?v=f315977235eefb5dc9cc2e6acc5c146389dacce3826a0bb33e4dcc79754c0dfc",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
