export const name="add_task-fill";
export const id="dl_c76984dcf09947c7af19";
export const url=new URL("../icons/A/add_task-fill.svg?v=60f2218a86a51e250efa504f0c7ae8df9a34a15f301b19cd8ad15f253f2ae78b",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
