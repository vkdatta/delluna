export const name="g_mobiledata_badge-fill";
export const id="dl_23aeac893bdd8eb2b50d";
export const url=new URL("../icons/g_mobiledata_badge-fill.svg?v=d221f7f1e58f5446585509174e954bbf5eea1dcbf582ef499559d6dea1edad91",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
