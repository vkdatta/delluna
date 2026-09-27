export const name="scatter_plot-fill";
export const id="dl_d41da68507d0413f40d1";
export const url=new URL("../icons/scatter_plot-fill.svg?v=a33af1baaea4aab675fbcbef5404ff94b7d8675962e195706845e9d71eae8707",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
