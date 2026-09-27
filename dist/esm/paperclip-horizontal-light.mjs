export const name="paperclip-horizontal-light";
export const id="dl_85eccc54d21d4deb8137";
export const url=new URL("../icons/paperclip-horizontal-light.svg?v=f3438c48a91897fe7b6f1fffd60ab3a4d4b76281579562b801f6b609c1d1e4a9",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
