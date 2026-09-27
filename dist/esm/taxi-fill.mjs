export const name="taxi-fill";
export const id="dl_a87f10a95f8ceba14df8";
export const url=new URL("../icons/taxi-fill.svg?v=a772347a99559fa1ed049a81893fe19953e832308f11d9b545cd57919e3d3442",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
