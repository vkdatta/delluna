export const name="lucid_3-space";
export const id="dl_2ef440957c074b359e00";
export const url=new URL("../icons/lucid_3-space.svg?v=1b377772bb4096eac0f71a1e4bbf16a82cf995b444763231142ff3211ecc4340",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
