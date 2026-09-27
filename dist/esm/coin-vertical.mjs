export const name="coin-vertical";
export const id="dl_e7d2b2f97c3a4da1a60a";
export const url=new URL("../icons/coin-vertical.svg?v=758264816b2d154771d63d2166830f14af9271e52b3c4cc45440c0a3d0b81062",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
