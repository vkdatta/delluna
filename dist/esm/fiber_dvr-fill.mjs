export const name="fiber_dvr-fill";
export const id="dl_99d32576377a5cb06bf0";
export const url=new URL("../icons/fiber_dvr-fill.svg?v=aeff6d0da8ecd42918644f98c06b0ff20cef9212d587dfac3f75500d09406510",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
