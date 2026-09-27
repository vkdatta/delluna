export const name="tornado-fill";
export const id="dl_86dbdaeeff6add6ea5c4";
export const url=new URL("../icons/tornado-fill.svg?v=346c8ac07e1cf36dab3ae219daa2d9fd4f35f9e4717b179e543cfd89d639ebaf",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
