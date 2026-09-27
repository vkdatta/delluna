export const name="dashboard_2_edit-fill";
export const id="dl_2f25073a024fdbe19ab9";
export const url=new URL("../icons/dashboard_2_edit-fill.svg?v=1af06eab40a69bfa280844ffe75740421e428de14b0819539e29c58665693c5b",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
