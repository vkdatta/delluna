export const name="camera_indoor-fill";
export const id="dl_9c21eeee48dacafd76aa";
export const url=new URL("../icons/camera_indoor-fill.svg?v=15eef27db68695b66e60be4536042512a4be68636c681ba86994fe5b0f22dcaa",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
