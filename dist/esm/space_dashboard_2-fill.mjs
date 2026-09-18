export const name="space_dashboard_2-fill";
export const id="dl_35a14a2e4c8f498fbdcf";
export const url=new URL("../icons/space_dashboard_2-fill.svg?v=636c0ee2229249b4f3b14ab0fa41d34995dcc03457633b37b29d7afe54cbb2c7",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
