export const name="mosque-light";
export const id="dl_9989b2c5a6964088b646";
export const url=new URL("../icons/mosque-light.svg?v=134d7c62c1120b68926967c48c86ff3b037bfb3e9335e74f210e198117c7fbf3",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
