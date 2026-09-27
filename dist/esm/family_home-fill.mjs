export const name="family_home-fill";
export const id="dl_a40a99c5e1d9eefa38dc";
export const url=new URL("../icons/family_home-fill.svg?v=5216d3cb8b6f9fb202beec55b2540ba030ecf6b3a9d99f0db802135bb3eb33ff",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
