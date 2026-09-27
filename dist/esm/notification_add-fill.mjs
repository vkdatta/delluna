export const name="notification_add-fill";
export const id="dl_47bd6ecebbe46e001235";
export const url=new URL("../icons/notification_add-fill.svg?v=a65c64ea78ec24150591e3d3adcfceb8ebc7bebffd0e9715f2dac57f252a8e27",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
