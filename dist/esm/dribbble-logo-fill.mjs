export const name="dribbble-logo-fill";
export const id="dl_c5c2798674744abfb9f4";
export const url=new URL("../icons/dribbble-logo-fill.svg?v=7e452d8eb54d2d1aaad1e37361c96ede99f46b650f2432b247a0380878b8ef7e",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
