export const name="table_view-fill";
export const id="dl_cf32a27fb7ca4aa89e3f";
export const url=new URL("../icons/table_view-fill.svg?v=2a6191e6f173e297e6ab77797b87c093d24a4b7ac3baa1ced8a57c46a8a7f3d1",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
