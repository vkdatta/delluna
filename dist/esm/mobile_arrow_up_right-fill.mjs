export const name="mobile_arrow_up_right-fill";
export const id="dl_a6f5010130390dd97dce";
export const url=new URL("../icons/mobile_arrow_up_right-fill.svg?v=77feb7d84e153235b053cc76bd62cfdda659e49dbfecdd618687a4489fac2600",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
