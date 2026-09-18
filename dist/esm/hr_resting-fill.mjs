export const name="hr_resting-fill";
export const id="dl_37be42569f6d469c9a5b";
export const url=new URL("../icons/hr_resting-fill.svg?v=8d5128db112b1667fbbeb6bc9b0373906be48631833b65e9ecc4a9fbd84d90be",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
