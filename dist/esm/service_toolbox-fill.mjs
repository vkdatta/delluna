export const name="service_toolbox-fill";
export const id="dl_c1dd4f056bad33e903f3";
export const url=new URL("../icons/service_toolbox-fill.svg?v=67eea4981db8b8c81870d388c718659d82f393a8cef3fecb353fa4f9b23cc539",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
