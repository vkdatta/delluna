export const name="egg-duotone";
export const id="dl_11af2c1e214242aab1f3";
export const url=new URL("../icons/egg-duotone.svg?v=b3d5dae9303ce26d525fdc2c5824b3bc9c6bd24b1a7c01987239edd1cde62c8b",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
