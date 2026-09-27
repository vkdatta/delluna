export const name="phone_enabled-fill";
export const id="dl_b7603d88f65f2b125419";
export const url=new URL("../icons/phone_enabled-fill.svg?v=538af3f1353f03d750437838c883649119847884d8099d00f22d8ae76ab84050",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
