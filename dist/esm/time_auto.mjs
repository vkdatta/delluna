export const name="time_auto";
export const id="dl_df652fd180f83a9c349b";
export const url=new URL("../icons/time_auto.svg?v=478a1eb132c28d0f3ddfe154b1c576709a85d841389100840e667a7f45947046",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
