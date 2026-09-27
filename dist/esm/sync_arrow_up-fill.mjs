export const name="sync_arrow_up-fill";
export const id="dl_ec20cd94b5013ded6609";
export const url=new URL("../icons/sync_arrow_up-fill.svg?v=db1f36444b4c31a1574876ef8f70f6ecda7d444cc8f69f9c10949e0e016a8315",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
