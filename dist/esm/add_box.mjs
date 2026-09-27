export const name="add_box";
export const id="dl_26dfc9d82d47b78b4353";
export const url=new URL("../icons/add_box.svg?v=18b3ed28f4806c169b87e6f0da1081ad5727e5d2703b0438a67aec3d89240807",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
