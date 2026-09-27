export const name="device-mobile-light";
export const id="dl_39d29fedfde342ff8709";
export const url=new URL("../icons/device-mobile-light.svg?v=638f66091f1bd9edd78821396f33d798eb3759279fbe5fe62f014553b5ce6e67",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
