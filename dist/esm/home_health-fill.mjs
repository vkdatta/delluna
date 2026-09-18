export const name="home_health-fill";
export const id="dl_f4f138dbdf2542d8a7a9";
export const url=new URL("../icons/home_health-fill.svg?v=41b577ffe4fa684e815b00347c169c2c88cee8e1c53bb519b0d2cb96f42864d2",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
