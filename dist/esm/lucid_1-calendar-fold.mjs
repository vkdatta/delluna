export const name="lucid_1-calendar-fold";
export const id="dl_e6785d505ec147e7adb8";
export const url=new URL("../icons/lucid_1-calendar-fold.svg?v=b75eefd3b0bcc9b3322b82a013fdd8e0e3bbcb7668822cfd9e15260ca22b13dc",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
