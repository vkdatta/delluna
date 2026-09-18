export const name="near_me-fill";
export const id="dl_69e78ae6d4c2475fa36c";
export const url=new URL("../icons/near_me-fill.svg?v=3dc8b35165063a7ab0f0dcaf01975fecb2be86d5ec0942f972725c0e8865174d",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
