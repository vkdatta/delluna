export const name="speaker-low";
export const id="dl_fb2181f338db6f91fd1b";
export const url=new URL("../icons/speaker-low.svg?v=2ca8d4672df4d169208161cb92ba8d037592048146eeb64406e266c3d39d8a11",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
