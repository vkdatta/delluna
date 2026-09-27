export const name="check-square-fill";
export const id="dl_0ebd995df8894275b72c";
export const url=new URL("../icons/check-square-fill.svg?v=1ca5748a8c4cdf3a2e9825e6f4471618c8666a66aad82c78b2210b73064c5fc9",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
