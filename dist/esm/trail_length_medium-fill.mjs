export const name="trail_length_medium-fill";
export const id="dl_67f0f8f3bae32ee4271e";
export const url=new URL("../icons/trail_length_medium-fill.svg?v=84d9c82010b23b08da60b00caf3b3723dcfb9b5b86ddbc0143e87746b24eb8e1",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
