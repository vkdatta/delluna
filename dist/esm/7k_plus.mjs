export const name="7k_plus";
export const id="dl_edbb30ad367b2df2f83c";
export const url=new URL("../icons/7k_plus.svg?v=586840e8d3c410b60f9a892dd76b7b98c75088a008a0dfd2d66b66e8d4305e92",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
