export const name="phone_cancel";
export const id="dl_62e2957881541decb612";
export const url=new URL("../icons/phone_cancel.svg?v=acd38cb390d398bc173acfc168de5f4ec1527561d86ad079a162bacf995606af",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
