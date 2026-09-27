export const name="dashboard_2_add";
export const id="dl_d838fc575faecbd18b61";
export const url=new URL("../icons/dashboard_2_add.svg?v=2dfff08efef2ae44a26ad2f88432a3feaf1b55bb7f64af2069774eae01173b38",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
