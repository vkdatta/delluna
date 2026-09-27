export const name="webhook-off";
export const id="dl_96d076f3f5684acc8647";
export const url=new URL("../icons/webhook-off.svg?v=a489ffd321facc4edcba688f3150e8e0045baa3400740be4fe6ea4fcd3b78582",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
