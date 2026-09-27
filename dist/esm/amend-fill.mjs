export const name="amend-fill";
export const id="dl_5f9f5a5d490566ba1635";
export const url=new URL("../icons/amend-fill.svg?v=f32f568fa0c5f40e7f5c65b48cd7817fea6bc50c3d4c53bce2f36bbc72202ac6",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
