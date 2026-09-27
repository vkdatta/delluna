export const name="wifi_proxy";
export const id="dl_93c7faa9b0ebfbda49d8";
export const url=new URL("../icons/wifi_proxy.svg?v=f24d237271a3ca131f7896530c88a09b93c7dfb56dde5fb8c2443ed113d68623",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
