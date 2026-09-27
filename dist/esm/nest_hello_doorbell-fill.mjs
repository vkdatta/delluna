export const name="nest_hello_doorbell-fill";
export const id="dl_c930c79b27fb5e9768cd";
export const url=new URL("../icons/nest_hello_doorbell-fill.svg?v=b0e1af2d83a3b270ea14176c0f9edd8ac05afa92bc6ce578ce3ed553cbf73c15",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
