export const name="remove";
export const id="dl_027bb681cf4e81107975";
export const url=new URL("../icons/remove.svg?v=0149434b56a113d77271ae7b0c95d4377e5766e6289dae787bb05597e932291d",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
