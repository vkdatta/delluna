export const name="speaker_2-fill";
export const id="dl_91555248641a22dad6d6";
export const url=new URL("../icons/speaker_2-fill.svg?v=c5fdb5ede7ec1a02cba11d43c5cb2708c4692700099ed9ae42344b6eb1e948df",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
