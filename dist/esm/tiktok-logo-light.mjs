export const name="tiktok-logo-light";
export const id="dl_95883e9216b34765b956";
export const url=new URL("../icons/T/tiktok-logo-light.svg?v=9f10a785c063f821edbdca29712dafd9ac09ffcaefe23fb08d2c77166f94b2b9",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
