export const name="home_iot_device";
export const id="dl_af9373b3c49ea339f59c";
export const url=new URL("../icons/home_iot_device.svg?v=3891f433bb31330ca7c0eea0db3a7d83ee068cfd6010e6cb89826035c98b8351",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
