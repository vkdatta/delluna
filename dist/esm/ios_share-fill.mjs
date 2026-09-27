export const name="ios_share-fill";
export const id="dl_2979db452e49247cf16c";
export const url=new URL("../icons/ios_share-fill.svg?v=1ade31d51bf3e4686ba1f6967beb8d3b061ccec69dd386f12b18101b0fa29c46",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
