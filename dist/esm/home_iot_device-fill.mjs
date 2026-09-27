export const name="home_iot_device-fill";
export const id="dl_fc1681794213ce9ffa75";
export const url=new URL("../icons/home_iot_device-fill.svg?v=cb573a2b112e2d6131de81ea7de783fe13f0c38b959e66984d35c074a07bf880",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
