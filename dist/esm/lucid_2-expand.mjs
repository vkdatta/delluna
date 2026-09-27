export const name="lucid_2-expand";
export const id="dl_97b17f5b806143ae9187";
export const url=new URL("../icons/lucid_2-expand.svg?v=52ee7011dc780c4f3272fa6fab01bfae0ad03fc3d223eb6418e7427f98920cc8",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
