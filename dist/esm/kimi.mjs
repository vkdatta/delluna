export const name="kimi";
export const id="dl_6a7512f09cf9a9780a9c";
export const url=new URL("../icons/kimi.svg?v=0cbd19f16567e6b095c9e3b892dd2d695d20a9ec9bf91a02afcaa0bb645bd43b",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
