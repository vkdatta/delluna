export const name="lucid_1-chart-pie";
export const id="dl_cc5eb0c894814a97b144";
export const url=new URL("../icons/lucid_1-chart-pie.svg?v=2a331316dba67ea257483a8f6b0b925f52921b0f4604310a6e70324e2d7b3271",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
