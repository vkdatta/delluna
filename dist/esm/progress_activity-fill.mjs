export const name="progress_activity-fill";
export const id="dl_3e1d41acd222f9c55a91";
export const url=new URL("../icons/progress_activity-fill.svg?v=468e89affab0e04a3a73074a9d36604f90e5ef74f1f41c1c3131acb796ed8ecc",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
