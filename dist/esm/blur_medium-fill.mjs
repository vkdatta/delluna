export const name="blur_medium-fill";
export const id="dl_ab89a50bee099dad1b63";
export const url=new URL("../icons/blur_medium-fill.svg?v=0ebd17bc2204f75808ac9683259e2f94df6455dcb39d6b90f09f017910031e8c",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
