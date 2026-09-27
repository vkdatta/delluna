export const name="motion_photos_auto";
export const id="dl_7bafbeb52ed6be0298ae";
export const url=new URL("../icons/motion_photos_auto.svg?v=e012790894e69ed9df0b3518f1218ba1458b9947881d00ec35442600583c7001",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
