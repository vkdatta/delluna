export const name="crosshair-fill";
export const id="dl_540fc7fa8e2941ae9a2b";
export const url=new URL("../icons/crosshair-fill.svg?v=afca9e2fdae8d0bb2f661d347098736ea9fa1bdfd19b8c23bd706ac8b4cd80a1",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
