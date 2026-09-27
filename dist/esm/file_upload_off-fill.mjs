export const name="file_upload_off-fill";
export const id="dl_7c3594d1f1c7c05c2ca8";
export const url=new URL("../icons/file_upload_off-fill.svg?v=3ec8d1c6d48a82dfbc29e0cf1a8c6eff6b0921e800215f10725dbbb2d1223f82",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
