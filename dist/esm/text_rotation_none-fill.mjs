export const name="text_rotation_none-fill";
export const id="dl_ce20bee588925456a072";
export const url=new URL("../icons/text_rotation_none-fill.svg?v=a03319a1e0a3dd91497f375496b910045a0c6d48f09bd994e0c3fca5d0aa7c20",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
