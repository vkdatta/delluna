export const name="add_link-fill";
export const id="dl_61ee23bbd22fd19a9394";
export const url=new URL("../icons/add_link-fill.svg?v=deef90d17dec4d3941e4d94faafd8bac59a18d488af081bb54fc0505365352c1",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
