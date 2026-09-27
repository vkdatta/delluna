export const name="car-profile-thin";
export const id="dl_295f9a0da1384fba8c1e";
export const url=new URL("../icons/car-profile-thin.svg?v=2a3170f31e20b207050a809b825d04cdd38119396713d1939ce257292eb73ae1",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
