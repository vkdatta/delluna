export const name="scatter_plot";
export const id="dl_46e753417c28522a94c1";
export const url=new URL("../icons/scatter_plot.svg?v=019654159899561b7eb3f8766018a41dde99e1d05f8268b92e8d4fb6f9a34d89",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
