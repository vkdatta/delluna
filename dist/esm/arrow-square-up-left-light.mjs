export const name="arrow-square-up-left-light";
export const id="dl_e3fb455ca8f5431bb6e7";
export const url=new URL("../icons/arrow-square-up-left-light.svg?v=78e571f1a2e582b378527a7080f8d90480b3d256843b707c59877f36be422300",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
