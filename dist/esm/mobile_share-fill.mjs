export const name="mobile_share-fill";
export const id="dl_76fe9195cde0eaebafd0";
export const url=new URL("../icons/mobile_share-fill.svg?v=27c039d3dd53fd14061f25cba4a43e004db7d219484a223dab9d0d10033b30e6",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
