export const name="network-duotone";
export const id="dl_91d4a19982324cd7ab73";
export const url=new URL("../icons/network-duotone.svg?v=39ed7e10ac5cf39c76fe0300cbd7bf42c71d5fc2be1e175dab6a3932097fc176",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
