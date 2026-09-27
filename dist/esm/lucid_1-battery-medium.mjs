export const name="lucid_1-battery-medium";
export const id="dl_ffdd27b4339244d7b2a2";
export const url=new URL("../icons/lucid_1-battery-medium.svg?v=52ddd0663fc64d5b0d35e8c1b74275f8dfd0224c12e8e15ac262c04444336a77",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
