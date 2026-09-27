export const name="badminton-fill";
export const id="dl_ac388eb756f35c91095b";
export const url=new URL("../icons/badminton-fill.svg?v=0153c8437232bc93f3bc366e497d6d64f7ac7a459379d83ecbe2c80663556236",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
