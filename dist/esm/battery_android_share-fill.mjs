export const name="battery_android_share-fill";
export const id="dl_6ec67406d79b552b07ae";
export const url=new URL("../icons/battery_android_share-fill.svg?v=edb77d4ae3d5ab974c5de29f5dbeca78a669d782eb0971775a4dcc4013092257",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
