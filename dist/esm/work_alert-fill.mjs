export const name="work_alert-fill";
export const id="dl_7f8b53e195dfb16d6060";
export const url=new URL("../icons/work_alert-fill.svg?v=5b07741f5895af5fce85394553c7d34a2f74d36d64a5e14eff446f424efce11a",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
