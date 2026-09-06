export const name="line-segments-duotone";
export const id="dl_d5cd66d7702b41e9bf34";
export const url=new URL("../icons/line-segments-duotone.svg?v=ae0e21c72f512f3cc903770aed6e3184e36a5c08a80215b7cefef673ec5b29d9",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
