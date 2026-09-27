export const name="translate_indic-fill";
export const id="dl_2ebf4461b95317dd25d6";
export const url=new URL("../icons/translate_indic-fill.svg?v=fec3d0279538cbcff83b70f15ab846f0a3266ffe3be5c307254d7cd97bd6d39a",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
