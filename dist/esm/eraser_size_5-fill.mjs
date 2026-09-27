export const name="eraser_size_5-fill";
export const id="dl_da39336e160403f27c49";
export const url=new URL("../icons/eraser_size_5-fill.svg?v=87e6d00c07d928cd9f2c3dfe0dd02918247a23c9f079c5134d22006811680b76",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
