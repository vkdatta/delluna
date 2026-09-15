export const name="ev_mobiledata_badge";
export const id="dl_8ebc48316a98449e8640";
export const url=new URL("../icons/E/ev_mobiledata_badge.svg?v=172b85339d870edf4d34fbab14d11e3610d509b0b08295d2b313ceb95c7b6589",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
