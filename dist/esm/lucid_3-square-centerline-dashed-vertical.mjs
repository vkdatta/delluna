export const name="lucid_3-square-centerline-dashed-vertical";
export const id="dl_eece36c07d2048a0a62e";
export const url=new URL("../icons/lucid_3-square-centerline-dashed-vertical.svg?v=f5e52c18520cee5f92bdf1395bd8770c55063bccf3ded7d019c426569fd9a66d",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
