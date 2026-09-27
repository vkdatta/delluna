export const name="reply_all-fill";
export const id="dl_d06a1de2fa3c6d13e46c";
export const url=new URL("../icons/reply_all-fill.svg?v=2f0cc36b21e948c64c304c3ececc91367e7c01da2cff13c74b8a7f957f139c99",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
