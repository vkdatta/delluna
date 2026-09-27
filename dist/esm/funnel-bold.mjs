export const name="funnel-bold";
export const id="dl_ae96a5e1ba3a46d9b180";
export const url=new URL("../icons/funnel-bold.svg?v=fdd6a52662075ea49eb7e9941ed542af9b9feb0f6cfba2e0bd65d2ef5013d023",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
