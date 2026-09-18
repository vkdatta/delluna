export const name="app_badging-fill";
export const id="dl_03a34a91994f49d8aa58";
export const url=new URL("../icons/app_badging-fill.svg?v=2d1a88599a73a3f619659aa97ae68bbd9ea5177df76d97faad8598bfb6161b77",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
