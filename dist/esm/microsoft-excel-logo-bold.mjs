export const name="microsoft-excel-logo-bold";
export const id="dl_47e222eb1e8740fba3b4";
export const url=new URL("../icons/microsoft-excel-logo-bold.svg?v=1842705b99bddede6dda9d90593b43fa24eccdb650be778a373c8fee48797771",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
