export const name="file-minus-bold";
export const id="dl_af149e9a7f4041409eb1";
export const url=new URL("../icons/file-minus-bold.svg?v=f58e7dbbf6bc3036b0b139eb3119a1f9910fedf7f2f2d8018e395ec6ffb284b5",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
