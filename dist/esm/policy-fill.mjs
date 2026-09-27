export const name="policy-fill";
export const id="dl_33772bb4a38f2ec420d9";
export const url=new URL("../icons/policy-fill.svg?v=cd0f23aabfac1cfa048ad1567d9684d072aca0eeb323bcb3c0840a170f232cdd",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
