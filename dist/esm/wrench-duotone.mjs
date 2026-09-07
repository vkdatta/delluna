export const name="wrench-duotone";
export const id="dl_c5c2804b90f84ecfac14";
export const url=new URL("../icons/W/wrench-duotone.svg?v=67c0b89c2688777cc25a14a7f78c39fc5463f7bc5257f1393f46d48b36422716",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
