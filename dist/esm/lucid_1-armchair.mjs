export const name="lucid_1-armchair";
export const id="dl_b7a2a7a288dc459aba9c";
export const url=new URL("../icons/lucid_1-armchair.svg?v=612c77d32c203c9381b7e4caf9420213b004e0cdec78733d2101e8d7f5d6b689",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
