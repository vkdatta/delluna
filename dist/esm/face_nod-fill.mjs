export const name="face_nod-fill";
export const id="dl_f415ec9ebbea71252e88";
export const url=new URL("../icons/face_nod-fill.svg?v=c4489ac21dc117f9018cf03b538a09e728d988b42e2a9c1e3a6902c8ae75c232",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
