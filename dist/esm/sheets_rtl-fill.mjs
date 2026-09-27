export const name="sheets_rtl-fill";
export const id="dl_ae6398ebd5c2d073b0e1";
export const url=new URL("../icons/sheets_rtl-fill.svg?v=994721ab7f00a15d6d0e93b4629b090ebf4b68aef8c51a5a37a3825cfa05fcf2",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
