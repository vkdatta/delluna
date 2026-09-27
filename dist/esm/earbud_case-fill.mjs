export const name="earbud_case-fill";
export const id="dl_1c95ad61c1cacd1f8a56";
export const url=new URL("../icons/earbud_case-fill.svg?v=d1d368eeba741d82733d919f14dd31ae2be12980812b96be7cf301597413feaa",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
