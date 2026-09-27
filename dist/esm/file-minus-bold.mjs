export const name="file-minus-bold";
export const id="dl_af149e9a7f4041409eb1";
export const url=new URL("../icons/file-minus-bold.svg?v=accbc69943b4694cbd41a19ef945791663c93377773a0c782e868d39f9413ffd",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
