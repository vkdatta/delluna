export const name="lucid_2-file-search-corner";
export const id="dl_ddf05c210cb34cc39ccf";
export const url=new URL("../icons/lucid_2-file-search-corner.svg?v=6f38f5a1d968bb56edb06a831f65b3822d24671efe17c5b807e9e29795104e49",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
