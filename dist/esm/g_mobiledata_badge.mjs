export const name="g_mobiledata_badge";
export const id="dl_459811dfd047af14dc90";
export const url=new URL("../icons/g_mobiledata_badge.svg?v=b495cf6be82346f4483b29f1044cc2a4b820d9248e1652643254c76778eee3c0",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
