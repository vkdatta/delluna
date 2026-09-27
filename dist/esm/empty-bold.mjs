export const name="empty-bold";
export const id="dl_c1b23328f84a45f7bb73";
export const url=new URL("../icons/empty-bold.svg?v=ee04d9e298f659e07d659b14088d51d8be22ebdfc8741a868b3c8b76a73ed169",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
