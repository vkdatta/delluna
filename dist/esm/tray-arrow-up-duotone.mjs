export const name="tray-arrow-up-duotone";
export const id="dl_8bb1a3cbeb1832bc5d2f";
export const url=new URL("../icons/tray-arrow-up-duotone.svg?v=f3240c1985feabd608992c3454d4d8cdf3c1362ae0b7520a92f206f249c2dc09",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
