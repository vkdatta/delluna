export const name="toggle_off-fill";
export const id="dl_4d4bc3fb6c3f6b9325cb";
export const url=new URL("../icons/toggle_off-fill.svg?v=39b5edaf1f9f639eea16201d329bfedc5d607a66a6788af3ef48fe9e569bbef8",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
