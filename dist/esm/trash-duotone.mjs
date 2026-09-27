export const name="trash-duotone";
export const id="dl_7b2097f8510d6222d736";
export const url=new URL("../icons/trash-duotone.svg?v=9bb97e55513caf85a388f7fa3e318a0650e1ad264f1393f37d4888a052c3c050",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
