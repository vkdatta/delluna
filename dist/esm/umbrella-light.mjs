export const name="umbrella-light";
export const id="dl_1dece1be804ce4f7ab25";
export const url=new URL("../icons/umbrella-light.svg?v=6161c6ed537e4ac1bd79300bdbb7a95322d2cfa3023a762db3f83b929cbb2d55",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
