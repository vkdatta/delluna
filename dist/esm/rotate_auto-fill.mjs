export const name="rotate_auto-fill";
export const id="dl_e056fd3f1ea0acc756c1";
export const url=new URL("../icons/rotate_auto-fill.svg?v=7d2cf473f7406eddf5d4eb3522477a3e0688f28a9bc248dc7d8243d9d9ef7a61",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
