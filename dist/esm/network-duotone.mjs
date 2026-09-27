export const name="network-duotone";
export const id="dl_91d4a19982324cd7ab73";
export const url=new URL("../icons/network-duotone.svg?v=cbe8b1c1c4c37b06a936a31471e32fee430a23d56d1e726306ab38a5cb2b5d33",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
