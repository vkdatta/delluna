export const name="local_see-fill";
export const id="dl_bdd126dbb7f43950a62b";
export const url=new URL("../icons/local_see-fill.svg?v=4893eef29130a8896b31484e998ba6df7b9ebcff7557b023297c2a49738e39d4",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
