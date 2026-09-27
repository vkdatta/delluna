export const name="speed_3";
export const id="dl_35f859f21a86070ae945";
export const url=new URL("../icons/speed_3.svg?v=d541f2a7161183719a35b4479bc7e788936d476d7792772026842d399576c03d",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
