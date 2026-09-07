export const name="tag-duotone";
export const id="dl_91a30be6412a46e3b39d";
export const url=new URL("../icons/T/tag-duotone.svg?v=3d1cc09e77869fd52efab0633cfb5ad050632f5f1c1ed1851298915ae3d80909",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
