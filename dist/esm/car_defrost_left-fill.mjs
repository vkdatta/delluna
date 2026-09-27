export const name="car_defrost_left-fill";
export const id="dl_652e5188fe68efdee5aa";
export const url=new URL("../icons/car_defrost_left-fill.svg?v=d5d74a4fe2fef37ccae8624d5a6a34c021da827a6a1d4690da5cc96f2c6fc39b",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
