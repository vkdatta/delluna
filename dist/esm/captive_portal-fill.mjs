export const name="captive_portal-fill";
export const id="dl_b8ac798d9eac4f178400";
export const url=new URL("../icons/C/captive_portal-fill.svg?v=3ff21615f9cbc5f08b3acf4f9633ad33939367d61c985a7ae9715705411ef7ad",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
