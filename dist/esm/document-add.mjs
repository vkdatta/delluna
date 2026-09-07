export const name="document-add";
export const id="dl_1689f295f3f042ae8aff";
export const url=new URL("../icons/add/document-add.svg?v=f8d9be6d4995080350b79e5c155fd0e0df159730b3ce0e829fe6c01f049e3f81",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
