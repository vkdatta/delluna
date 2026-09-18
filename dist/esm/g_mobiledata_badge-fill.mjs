export const name="g_mobiledata_badge-fill";
export const id="dl_94cc7500d8c7401da069";
export const url=new URL("../icons/g_mobiledata_badge-fill.svg?v=006148c29034ee81e03d532aefc60510822c565fb5fae54944dae2deac81a71f",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
