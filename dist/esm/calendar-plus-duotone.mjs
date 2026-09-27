export const name="calendar-plus-duotone";
export const id="dl_9bc72c66946747f7adf5";
export const url=new URL("../icons/calendar-plus-duotone.svg?v=a7b7cc06be70616d6f00104fc498d78dce7c1e5351ec6e63f5943e7ed23eedaa",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
