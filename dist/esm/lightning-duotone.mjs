export const name="lightning-duotone";
export const id="dl_0fed22bc5e5a489381e6";
export const url=new URL("../icons/lightning-duotone.svg?v=aab43bf156d9047ff4002359cecedc867c8e3fecd9d1475635ea4e7b8416267c",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
