export const name="hardware";
export const id="dl_b7e22eb0caff458194b3";
export const url=new URL("../icons/hardware.svg?v=b1539800365930ef701233a886377ecacdafcdbbcf9e1501531cc5cef6a50b83",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
