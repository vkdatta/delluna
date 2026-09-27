export const name="delete_history-fill";
export const id="dl_d5fe786fd49f06a0ab16";
export const url=new URL("../icons/delete_history-fill.svg?v=0a7ca8941625cbd98ffa91a61e72149128ff67940c2b8664ccc253fb14bbf22f",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
