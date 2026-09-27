export const name="mobile";
export const id="dl_bd49351a3cb04685b3ff";
export const url=new URL("../icons/mobile.svg?v=82331a129b65170881a32f2ed48d2240610aebfabaf8c55b66315356aa356a1c",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
