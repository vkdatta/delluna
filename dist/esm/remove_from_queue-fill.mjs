export const name="remove_from_queue-fill";
export const id="dl_dbdc2dce253c483eabcc";
export const url=new URL("../icons/remove_from_queue-fill.svg?v=701921756c6318ad656a867725068f73ef1c745af0a6fc4463d26f3ef8e27da1",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
