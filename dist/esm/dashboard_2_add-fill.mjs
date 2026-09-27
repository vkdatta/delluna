export const name="dashboard_2_add-fill";
export const id="dl_4ea2f8c46d936c948ced";
export const url=new URL("../icons/dashboard_2_add-fill.svg?v=c52baaf8db0b267fb58b5c3be5220f858ad8896b945b6222a48cc443fc5516fb",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
