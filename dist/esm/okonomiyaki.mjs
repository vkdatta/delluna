export const name="okonomiyaki";
export const id="dl_374bdaf25704de7f9d39";
export const url=new URL("../icons/okonomiyaki.svg?v=dba1fe3393a1e92caa8881d0594e52cce28953de8ecca346939ddb3a4386c309",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
