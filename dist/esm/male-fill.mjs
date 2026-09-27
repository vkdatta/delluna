export const name="male-fill";
export const id="dl_d1756328fe6c03c47c9f";
export const url=new URL("../icons/male-fill.svg?v=b9beaf0b73041b4bbb90d016048ecbfce24f682af1554eede0a902e31f44d2ff",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
