export const name="diversity_3-fill";
export const id="dl_afc1862abe662b8a8c9e";
export const url=new URL("../icons/diversity_3-fill.svg?v=36ade140ac8c99be6ff2445b1cc90c1c8bf3eeb3ce527f76b35bb5d1857436a7",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
