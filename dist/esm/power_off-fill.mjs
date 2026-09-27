export const name="power_off-fill";
export const id="dl_582c6206dfcc45614eb0";
export const url=new URL("../icons/power_off-fill.svg?v=e5adfcad6ae6427e2b3276310dc700c18ea7561d52da7589e3cad5cb696cb7f3",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
