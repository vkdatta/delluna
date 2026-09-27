export const name="add_chart-fill";
export const id="dl_59cfe875b743ed04ed96";
export const url=new URL("../icons/add_chart-fill.svg?v=d14f855a500f148f05dcc729fecc860020add4ea78099835be3c38dfd824b45b",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
