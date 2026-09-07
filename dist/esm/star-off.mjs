export const name="star-off";
export const id="dl_eb53fbd9c0d1450385d8";
export const url=new URL("../icons/star-off.svg?v=a64a66b9c0d7051d9b4893b31c77960994e0e4e4a2a9121d45bd2e003ed202c1",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
