export const name="cast_warning-fill";
export const id="dl_8a2161d1e3254519bed2";
export const url=new URL("../icons/cast_warning-fill.svg?v=435f47048b01e2458800c9e00320e06f33cd1df28ea96a52c6ebb6362b4e688b",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
