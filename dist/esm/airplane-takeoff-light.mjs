export const name="airplane-takeoff-light";
export const id="dl_83665a19ecb349f5aadd";
export const url=new URL("../icons/airplane-takeoff-light.svg?v=e1e2ade39d257e0fed58da078e2cd809581e0baf1f0b8645d465e2a226a96a75",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
