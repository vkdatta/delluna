export const name="car_defrost_low_left-fill";
export const id="dl_4e621a816f1d4802ae17";
export const url=new URL("../icons/car_defrost_low_left-fill.svg?v=4dc82fde64fe3302d8b8d4860c74af0bae469a1e0c906693609e2675ba5f7b72",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
