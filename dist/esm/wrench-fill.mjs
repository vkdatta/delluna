export const name="wrench-fill";
export const id="dl_ecea61648e9547c49d49";
export const url=new URL("../icons/W/wrench-fill.svg?v=a04703c10ffb2adaae16d1e434c76cd013938027d74adc5d80c66ab8eae9c61d",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
