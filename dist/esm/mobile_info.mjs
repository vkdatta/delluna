export const name="mobile_info";
export const id="dl_3adb6f98b805f81f0640";
export const url=new URL("../icons/mobile_info.svg?v=e062161dc083c7347d93f0952792ccb26c4c80a130cc786ddd7fbe4b27d8844f",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
