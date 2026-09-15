export const name="finance-fill";
export const id="dl_ae06bc59de874e20acdb";
export const url=new URL("../icons/F/finance-fill.svg?v=d9cddd2256354884a10ff32e2ec9764d04fb637569427b52da5cb9c9c2a984a2",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
