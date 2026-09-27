export const name="fit_page_height";
export const id="dl_dbb0fe3407b997584599";
export const url=new URL("../icons/fit_page_height.svg?v=94500123a086f99b47a3025af5d49be30a5df41b934a20a55b32c2f472c1c3d1",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
