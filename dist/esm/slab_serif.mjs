export const name="slab_serif";
export const id="dl_ab324b269d90e12238f9";
export const url=new URL("../icons/slab_serif.svg?v=1c20b2f42f00d08d229060a81c5b84eb69a1d00d880ae2df037c80d71c65d476",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
