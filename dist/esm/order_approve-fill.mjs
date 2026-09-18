export const name="order_approve-fill";
export const id="dl_409cfca8c54449efb642";
export const url=new URL("../icons/O/order_approve-fill.svg?v=79445c65c6accc1abdc89766dd7f4a037061decad88eec55d01e6dcf169d600d",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
