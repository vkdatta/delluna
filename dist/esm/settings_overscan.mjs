export const name="settings_overscan";
export const id="dl_4c41b1d62507dd79b6f0";
export const url=new URL("../icons/settings_overscan.svg?v=a8e06b2c21571c46b0b61b104740cae46b4029e4a94d6055a102e0364bea9c3d",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
