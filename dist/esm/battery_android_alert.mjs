export const name="battery_android_alert";
export const id="dl_827a67c76aed49529083";
export const url=new URL("../icons/battery_android_alert.svg?v=1c35e716d77fc20da7c5fb7fe77097236446e6d51bd2c351f1b6c82cdbac12e8",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
