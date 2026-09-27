export const name="boxing-glove-fill";
export const id="dl_1142d1c6c3f54734a06b";
export const url=new URL("../icons/boxing-glove-fill.svg?v=e392edf189a66cbb578d3cfc802dbcc5b29eff316aad288f60d2dc23a244a1b4",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
