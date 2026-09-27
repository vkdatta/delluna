export const name="score";
export const id="dl_3df3e33627cd0c8300e9";
export const url=new URL("../icons/score.svg?v=23d120f3014c2418239cc6f902b91713071bcfa3f6a90a9a968d3f943cc4cee0",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
