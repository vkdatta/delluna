export const name="behance-logo-thin";
export const id="dl_edd7e9481add40f2a033";
export const url=new URL("../icons/behance-logo-thin.svg?v=9d84b41265c03aa10717b3e347a4ec0ae9ccf7ed47f0a2806bff1072ccc845a0",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
