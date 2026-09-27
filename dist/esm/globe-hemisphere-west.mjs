export const name="globe-hemisphere-west";
export const id="dl_b1ee50cb576d4edd95aa";
export const url=new URL("../icons/globe-hemisphere-west.svg?v=b249b6eab3157d73100989c187c0b0255e05d8aebcc2d45426b13db16eb9fa13",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
