export const name="number-square-one-fill";
export const id="dl_f1f50240d5004ce396ee";
export const url=new URL("../icons/number-square-one-fill.svg?v=b2acb2b159d814bf9bbe0088a20bc801efcb415705a94f4e4927a10c02d62f63",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
