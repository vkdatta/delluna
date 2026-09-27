export const name="equalizer";
export const id="dl_358bc9a91a1345528fc2";
export const url=new URL("../icons/equalizer.svg?v=1a348c51b8daf6475eebb812d557e2b66eef70a234183941fc6ccc7ef758d301",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
