export const name="scissors-fill";
export const id="dl_6e2b1229633544af9753";
export const url=new URL("../icons/S/scissors-fill.svg?v=c96f347e05fe47d8e55c5adaee8e8e70bcc28e0f2d0ce3af28defcaa76418543",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
