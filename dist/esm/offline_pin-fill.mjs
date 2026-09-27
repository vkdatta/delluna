export const name="offline_pin-fill";
export const id="dl_077570124752d7ec2667";
export const url=new URL("../icons/offline_pin-fill.svg?v=eec3285c3e623e34375b3be68579b1941031cb2720b59437bc0471ab12fd4fa4",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
