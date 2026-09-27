export const name="filter_6-fill";
export const id="dl_6cedd5ead65318b505b7";
export const url=new URL("../icons/filter_6-fill.svg?v=b449e6a641055da5f77a485247dc67541261414b292aeba1f2d01a6cc1c5038b",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
