export const name="line-segment-fill";
export const id="dl_023bfc2c4c2f41e0b7a1";
export const url=new URL("../icons/line-segment-fill.svg?v=418b3c419091b4314a327ea5916d60497404a28b775d12c23120543755d79862",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
