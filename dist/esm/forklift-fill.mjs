export const name="forklift-fill";
export const id="dl_5f8b73a3d469c2aab1d4";
export const url=new URL("../icons/forklift-fill.svg?v=4736d3916a0eb131bcb6bf51a91e4bf928fb82fb7551327ffa7bb05350923e02",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
