export const name="infinity-fill";
export const id="dl_b1ddef7fb66346b6863a";
export const url=new URL("../icons/infinity-fill.svg?v=666bc72610c965ada7559ea911dbb8ba7718be6d46bbbb220169cc56e143ac72",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
