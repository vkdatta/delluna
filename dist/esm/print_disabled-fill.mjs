export const name="print_disabled-fill";
export const id="dl_d3d35e2b139647e9adb8";
export const url=new URL("../icons/print_disabled-fill.svg?v=dfb28c9f248356a2bf08c744d87b6ef7aae15930ce201f3784293032e9d60e70",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
