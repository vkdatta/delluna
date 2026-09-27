export const name="attribution";
export const id="dl_80a0f574f2eb4fe94ceb";
export const url=new URL("../icons/attribution.svg?v=d8a6862051811331fb14fc05a117caa6de39e3794ad5692d07321e337cc4dfbc",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
