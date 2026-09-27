export const name="car_rental-fill";
export const id="dl_61c1c46d9f630c66ba2f";
export const url=new URL("../icons/car_rental-fill.svg?v=e491da3a59627c8c053bd693fededd906a84180f21debeeed2e76842f2aee232",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
