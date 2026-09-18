export const name="5g_mobiledata_badge";
export const id="dl_44349bd93176460bbfe0";
export const url=new URL("../icons/5g_mobiledata_badge.svg?v=467ebc37c739e1328cba7f2a065173c0d7b2f9ea4c2f4ba569d85a3a1d81d40e",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
