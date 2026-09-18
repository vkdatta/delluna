export const name="skip_previous-fill";
export const id="dl_9b7a6c173012422d9cf1";
export const url=new URL("../icons/skip_previous-fill.svg?v=1ef099536d71ecaea4510cbf7c328355d2ea359cccbef05a07bc1d39d4ddbc7d",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
