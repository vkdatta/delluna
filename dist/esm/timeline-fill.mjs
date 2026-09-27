export const name="timeline-fill";
export const id="dl_cc4b676e39d2ecff0ec4";
export const url=new URL("../icons/timeline-fill.svg?v=53251a4778ee7aeca4ac8b763ffc05b1246ca13a08f42975e0d6f431692c46b6",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
