export const name="slab_serif";
export const id="dl_ab324b269d90e12238f9";
export const url=new URL("../icons/S/slab_serif.svg?v=62c9318061f24f4614434a7e75aa88b759e208dfc1a1d0039c4d0f831801a8e5",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
