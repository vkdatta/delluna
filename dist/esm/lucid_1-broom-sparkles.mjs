export const name="lucid_1-broom-sparkles";
export const id="dl_7791b3ca8a27444480e7";
export const url=new URL("../icons/lucid_1-broom-sparkles.svg?v=fd99ea1d604260d3314db12dea3123e6bcfd275931349f86af902309a495097b",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
