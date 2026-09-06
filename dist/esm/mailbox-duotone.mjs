export const name="mailbox-duotone";
export const id="dl_a8bd1c10c8f7468ea3c6";
export const url=new URL("../icons/mailbox-duotone.svg?v=e7b20fec4f4d7f14f1d27e611c7b2b65af6dde7ee23cc6e50978f503d35aff1b",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
