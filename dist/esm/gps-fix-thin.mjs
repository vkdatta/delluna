export const name="gps-fix-thin";
export const id="dl_493c93d3753743b2b806";
export const url=new URL("../icons/gps-fix-thin.svg?v=d9ea1a3483bd23e1bf0e10124697aa5f594e806ec41f4edfa2c2d5f988a30661",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
