export const name="visibility_off-fill";
export const id="dl_e9575185bfb7a7b3da2b";
export const url=new URL("../icons/visibility_off-fill.svg?v=44643e5f5a7314e536753c83b4eefee54e44a6dd354ac60942f2f94f15aac317",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
