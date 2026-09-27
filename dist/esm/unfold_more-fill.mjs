export const name="unfold_more-fill";
export const id="dl_56736411342fdceeb592";
export const url=new URL("../icons/unfold_more-fill.svg?v=491613208051d80c882c922718f5c2762807827a6ce0a91964aad9e21674c151",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
