export const name="lte_plus_mobiledata_badge";
export const id="dl_b777a897d1274d26a5e4";
export const url=new URL("../icons/lte_plus_mobiledata_badge.svg?v=2a57097e2ec695fbbe14eea49fed659615a34518dab62a9af0302e25c0ec977a",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
