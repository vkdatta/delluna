export const name="lucid_3-scan-eye";
export const id="dl_6ba6f27ff8a245f0a9cd";
export const url=new URL("../icons/lucid_3-scan-eye.svg?v=63a2b80e511a3e0052fc8073f828cf04ae9814ae14f3d5887052ed53e857b204",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
