export const name="microsoft-excel-logo-fill";
export const id="dl_8b2ea4e45ced4828ace3";
export const url=new URL("../icons/microsoft-excel-logo-fill.svg?v=09a08a4c22fe65d19338af2d78cab1c923cbdc859de53b46b88551da8dda1571",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
