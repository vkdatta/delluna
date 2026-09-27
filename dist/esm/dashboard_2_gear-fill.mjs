export const name="dashboard_2_gear-fill";
export const id="dl_75d53312c2d83bcbe443";
export const url=new URL("../icons/dashboard_2_gear-fill.svg?v=9c4991e3b248214dcbd857a92339a1651b2bd2a802507810465c245afda01c34",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
