export const name="treasure-chest-bold";
export const id="dl_e81ebf8152d446adaab5";
export const url=new URL("../icons/T/treasure-chest-bold.svg?v=07beb0687cd704bbd238b530f596ff7e3b8a71b31c72b04ef15a87b434cde2a6",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
