export const name="currency-dollar-simple";
export const id="dl_051c676ca67343f99f4f";
export const url=new URL("../icons/currency-dollar-simple.svg?v=3768770ac5d8b7565d31f8361393ba008fe55f63d124804daed0d36c52cf0cab",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
