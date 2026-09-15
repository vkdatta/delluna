export const name="call_log-fill";
export const id="dl_2449ac4c1cf844d19d91";
export const url=new URL("../icons/C/call_log-fill.svg?v=3cd342fd1a2f56a61f324c3d2b894b665f8955af701fb0304d7ea7214baf3576",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
