export const name="dashboard-fill";
export const id="dl_6c2b87f9e4c4bb5341a1";
export const url=new URL("../icons/dashboard-fill.svg?v=2d95d27ef4a3f97bd91e47376d9054b77a79075a8b1963d2a7cb1d99bff661a2",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
