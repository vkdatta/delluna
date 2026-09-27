export const name="lucid_2-lock-keyhole";
export const id="dl_42d8546126d344d194f3";
export const url=new URL("../icons/lucid_2-lock-keyhole.svg?v=0c8a6100cf2951bacd13da83ef1ba4366687a0b2658264cea45785453f89ed94",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
