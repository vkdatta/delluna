export const name="spoke-fill";
export const id="dl_fe5d6587335f465e9d2e";
export const url=new URL("../icons/S/spoke-fill.svg?v=1a44208ee199a7973f3f32040a7111d8d6bbfb8948ed44afbb0c93e915ee699b",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
