export const name="landscape_2_edit-fill";
export const id="dl_bd7c328309fa4bf5418a";
export const url=new URL("../icons/landscape_2_edit-fill.svg?v=56c21a879e0893a04bd8d2bfb7ffc13e976919073f2831e354d699f867fcd682",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
