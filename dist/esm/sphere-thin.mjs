export const name="sphere-thin";
export const id="dl_9459d7a7aae2661ae43d";
export const url=new URL("../icons/sphere-thin.svg?v=fb1f9b8e24ee31dec8bceca7443953f05dfe9683bbcfdf5f33e8427f1f3e5a5d",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
