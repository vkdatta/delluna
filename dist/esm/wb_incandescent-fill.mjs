export const name="wb_incandescent-fill";
export const id="dl_ae8ba2d881be62e96f80";
export const url=new URL("../icons/wb_incandescent-fill.svg?v=6be4a91de264fa7010a1ea0dcd4cadb1d56898bee480b15e55812fe86d387276",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
