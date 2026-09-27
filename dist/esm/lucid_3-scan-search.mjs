export const name="lucid_3-scan-search";
export const id="dl_6509383768dc40a088ff";
export const url=new URL("../icons/lucid_3-scan-search.svg?v=9df6bd4fd1d5675abbdb15cdf2f278cc23f59a0bdddf9c5e35c6dce77e755e83",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
