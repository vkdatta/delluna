export const name="dashboard_2_edit-fill";
export const id="dl_a598e1012a75a3f1419a";
export const url=new URL("../icons/dashboard_2_edit-fill.svg?v=208a98a8edd7c58e8e1bef5d48f4376e669bf52558eef57ff9a13c3a602a2497",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
