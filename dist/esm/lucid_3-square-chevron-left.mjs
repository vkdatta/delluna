export const name="lucid_3-square-chevron-left";
export const id="dl_dd23973757a046309be3";
export const url=new URL("../icons/lucid_3-square-chevron-left.svg?v=18ab5aa5fe88f137ec011747468890a4de112073c0439872f17db409992a62d0",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
