export const name="ev_mobiledata_badge-fill";
export const id="dl_2cb12a7294ec171ffb44";
export const url=new URL("../icons/ev_mobiledata_badge-fill.svg?v=65592d142cb141a196d392345a72fa9325f5c7c274318747466162f55f635e0d",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
