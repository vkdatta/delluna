export const name="text-b-light";
export const id="dl_364338ad31e340a9b1be";
export const url=new URL("../icons/T/text-b-light.svg?v=72c50810026a9fc86e2cdf5f049cf467533b57def0a9ded778831fadb25c82fe",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
