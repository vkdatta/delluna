export const name="phone-plus-duotone";
export const id="dl_60aac705d8a94e4a9717";
export const url=new URL("../icons/phone-plus-duotone.svg?v=4bd6b95fcacdd403908c15f1732499375d979881d52ad031bccdbdfd1c828d06",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
