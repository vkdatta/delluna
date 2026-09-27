export const name="images-square-fill";
export const id="dl_d19ade08b158442795ec";
export const url=new URL("../icons/images-square-fill.svg?v=8bb31274156b18e69e92a3bcaac7757405c5467222d19370666e06a948efe247",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
