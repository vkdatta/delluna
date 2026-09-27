export const name="add_to_queue";
export const id="dl_ef79200090ab7bcf45c0";
export const url=new URL("../icons/add_to_queue.svg?v=8c77e0ac2b5a6f25fe0885ed75f7464ae381cbe61a2663f46a77e900bc973976",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
