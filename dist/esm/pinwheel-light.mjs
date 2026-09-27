export const name="pinwheel-light";
export const id="dl_fef04167254d4a9f83d3";
export const url=new URL("../icons/pinwheel-light.svg?v=cd37464d5a8111bb8561c574640218064acb223de228bab1756f10b0ced7c34d",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
