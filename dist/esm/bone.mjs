export const name="bone";
export const id="dl_a668743d8bf64944b585";
export const url=new URL("../icons/bone.svg?v=63efa38231e0d8892cb8da294f0b8bc2fb06a4afe608c3a5ee6d9e618f5c4a30",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
