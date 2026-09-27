export const name="gps-fix-duotone";
export const id="dl_33da79316ede4245b96b";
export const url=new URL("../icons/gps-fix-duotone.svg?v=25d241c6a0d2680d33344f7596f4075c2b1fb5ee3a2f261643e117c8daa41f73",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
