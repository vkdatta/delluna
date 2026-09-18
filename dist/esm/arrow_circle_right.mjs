export const name="arrow_circle_right";
export const id="dl_fba3339abece445aa306";
export const url=new URL("../icons/arrow_circle_right.svg?v=86967b13d368a0f944d0bfcbf5e865d7ddec9a7c76d70f48b139cbba5d142e8d",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
