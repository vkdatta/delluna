export const name="battery_android_plus";
export const id="dl_7622d76a6bc39223c9b7";
export const url=new URL("../icons/battery_android_plus.svg?v=5e10aeddf9b0e3256da73d4bc036bb8edcf26b02cff9d0df5237d618df8f6bd0",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
