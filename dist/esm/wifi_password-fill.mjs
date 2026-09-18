export const name="wifi_password-fill";
export const id="dl_ea8381f206c748a6a37e";
export const url=new URL("../icons/W/wifi_password-fill.svg?v=0ca30d0b9894b6182441aab2ff15883e545f5c2ee24e8256c11903d7b8aaf361",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
