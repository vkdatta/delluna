export const name="fallout-shelter-light";
export const id="dl_017885277e314e56b859";
export const url=new URL("../icons/fallout-shelter-light.svg?v=9a3354b42c24c8521eed8d4ef6e3c9a111075896606b92dc8630062b1b2d4d8e",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
