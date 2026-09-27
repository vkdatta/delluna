export const name="wifi_password-fill";
export const id="dl_4fbb64d132157c82797b";
export const url=new URL("../icons/wifi_password-fill.svg?v=cedad58f497c7258617876bd9d6dc1d7ae17c125c8f696319024116ba020f261",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
