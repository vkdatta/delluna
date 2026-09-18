export const name="explore_off";
export const id="dl_a73fbb3ee40e456f8607";
export const url=new URL("../icons/explore_off.svg?v=1bf06a00b32f368ca508a6f76066fbab8283827f7afad170d4c7afd92ab6e637",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
