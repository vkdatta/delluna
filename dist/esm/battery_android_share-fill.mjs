export const name="battery_android_share-fill";
export const id="dl_22b222208d2e7ac95939";
export const url=new URL("../icons/battery_android_share-fill.svg?v=9d063140c3c83723b1632c9df2d408992caa7f66ce9883ce16ad88d9fd01a1ed",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
