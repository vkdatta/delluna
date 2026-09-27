export const name="caret-line-down-duotone";
export const id="dl_b423fda56265429583a8";
export const url=new URL("../icons/caret-line-down-duotone.svg?v=52d9d44c7352ab53a3d34c825380d30ed226d35d01b579d614a9d1685e059f41",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
