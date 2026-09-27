export const name="view_module-fill";
export const id="dl_c6ba19eac322cba24d39";
export const url=new URL("../icons/view_module-fill.svg?v=55d6839abf349904c21f39502bd461b54464885ef38726b3489a4cf63451ff01",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
