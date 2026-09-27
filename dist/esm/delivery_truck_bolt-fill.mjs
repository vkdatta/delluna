export const name="delivery_truck_bolt-fill";
export const id="dl_422c0dee483e69171698";
export const url=new URL("../icons/delivery_truck_bolt-fill.svg?v=40a9cdb71bd9db34d9e8022484d4a7d2f930bd8b22e19d99cb65e07ef3c8d403",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
