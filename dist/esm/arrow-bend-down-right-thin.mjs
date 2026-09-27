export const name="arrow-bend-down-right-thin";
export const id="dl_fcc8a8fae6a74b36bc47";
export const url=new URL("../icons/arrow-bend-down-right-thin.svg?v=0dff96d2d8ec31a9d035e8077544676a10e7dad1dc5d35ed2cc5af3198481e7d",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
