export const name="image-square-thin";
export const id="dl_bb1ea9ea1fa244ab85be";
export const url=new URL("../icons/image-square-thin.svg?v=dd07ebdf3546db1b9f7b2343cefdfd659e6f746f4ecc182a91788485a36ede83",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
