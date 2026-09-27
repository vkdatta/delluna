export const name="text-underline";
export const id="dl_7419bbb40241b4143b32";
export const url=new URL("../icons/text-underline.svg?v=1d2bd4947cf08217cfce1f751f2ef6632a06713a5f95c10a7ea88af886cc7329",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
