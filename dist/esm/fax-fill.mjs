export const name="fax-fill";
export const id="dl_c7a3d17f397782021bb5";
export const url=new URL("../icons/fax-fill.svg?v=ddba86ea851bd23a48f0770873370f43fb14ee689e2e70e2af9977b434a3c640",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
