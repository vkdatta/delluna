export const name="electric_bike-fill";
export const id="dl_78bdd268045a7d81ddf5";
export const url=new URL("../icons/electric_bike-fill.svg?v=29a3796941566687fef926b83206ec005f153259f52a98edd8b6969a99476112",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
