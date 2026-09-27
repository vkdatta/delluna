export const name="caret-circle-double-up";
export const id="dl_8357173efe4f42b18d2d";
export const url=new URL("../icons/caret-circle-double-up.svg?v=358379481e253d6cbc69e4efb828eca18db8236dc6559b489c26588f70f59574",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
