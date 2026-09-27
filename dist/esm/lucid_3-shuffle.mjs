export const name="lucid_3-shuffle";
export const id="dl_1d5e4a99a6084bb086e9";
export const url=new URL("../icons/lucid_3-shuffle.svg?v=6278cd801e902ab9b3df49e7c1f3fd3514cd05ac2b923d30164260c072efe89f",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
