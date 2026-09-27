export const name="magnify_docked";
export const id="dl_a1f806d02a75164fe74c";
export const url=new URL("../icons/magnify_docked.svg?v=18191e3f34c89d7d6e3f0781e6c8aaa923f9d4b1b714a418203e0f243707e447",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
