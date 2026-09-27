export const name="b_circle-fill";
export const id="dl_eeaef66deba268069991";
export const url=new URL("../icons/b_circle-fill.svg?v=3f1e0e66a7ae81fdb136dfd1f9d384c07633ae6e691ec3da8c78328970993a58",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
