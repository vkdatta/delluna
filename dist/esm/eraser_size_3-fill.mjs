export const name="eraser_size_3-fill";
export const id="dl_4680da26e225095f20b9";
export const url=new URL("../icons/eraser_size_3-fill.svg?v=1654fccbf7f6fb4fdc3e6359b2478fb149f9fc131a51715295615a58399d442a",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
