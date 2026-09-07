export const name="sparkle-light";
export const id="dl_4000e089b05e422ba558";
export const url=new URL("../icons/S/sparkle-light.svg?v=027e2e3b652bb25cce0e0f1ae706720cd684f05ddce4c25497a6133aa2548da5",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
