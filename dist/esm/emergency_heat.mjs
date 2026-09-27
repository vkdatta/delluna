export const name="emergency_heat";
export const id="dl_c73cfde279b3ea2c3ca9";
export const url=new URL("../icons/emergency_heat.svg?v=255b55f8bca2bf32442429f0a407bfe0850fcf63c3c091c8dc4cfd6c620fec81",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
