export const name="brackets-angle-duotone";
export const id="dl_3a810e95c3194d12a966";
export const url=new URL("../icons/brackets-angle-duotone.svg?v=7f5cf74ee6bdf557d0d1d47ff4f02fbdfca6b92c317f40561d165588168ba36a",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
