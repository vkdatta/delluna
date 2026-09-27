export const name="battery_android_alert-fill";
export const id="dl_a969f011752cc3c942b3";
export const url=new URL("../icons/battery_android_alert-fill.svg?v=f654067831cd6a46b4b57c986795beb1208ec2d8a079702df1e1c8f994856c77",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
