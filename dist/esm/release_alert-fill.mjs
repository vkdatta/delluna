export const name="release_alert-fill";
export const id="dl_bcba221abed5d1fed7f9";
export const url=new URL("../icons/release_alert-fill.svg?v=ade8c63758666e323616bace8a91b1aa4c4170b8d81a6a2b8fd3dd4af6e3896b",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
