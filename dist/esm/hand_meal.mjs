export const name="hand_meal";
export const id="dl_6d71884f81414dadb650";
export const url=new URL("../icons/H/hand_meal.svg?v=a09e2d881d0a83dd3d2ffbf3dbf14ac9463e616aff49150f0300fcabf2aa0f78",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
