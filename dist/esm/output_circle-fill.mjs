export const name="output_circle-fill";
export const id="dl_9a02e5c5d54c715388d3";
export const url=new URL("../icons/output_circle-fill.svg?v=c0c54b98f4bd6196fde9ae9bfc4fe2248af77f84b0d73f8e31493c738570cda6",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
