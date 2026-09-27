export const name="home_iot_device-fill";
export const id="dl_2dcd9fb5441dd5b4509c";
export const url=new URL("../icons/home_iot_device-fill.svg?v=f7acf7d874f5de85db60565228168ef56374416f2358cc5ff1b605b36b1f9205",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
