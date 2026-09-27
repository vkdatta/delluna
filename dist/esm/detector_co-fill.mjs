export const name="detector_co-fill";
export const id="dl_ab6bc78aff4e3a37b05a";
export const url=new URL("../icons/detector_co-fill.svg?v=ba623f343e05dd8e98bec2a79736436209dcdab663530a45e84f12314ad305a2",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
