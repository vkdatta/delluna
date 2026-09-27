export const name="headset_off";
export const id="dl_46ed75ac2a104f135446";
export const url=new URL("../icons/headset_off.svg?v=008b95b98596595609cbb17f27029afaaed575f35272bd3c1f7a60ea70f205db",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
