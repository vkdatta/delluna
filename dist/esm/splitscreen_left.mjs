export const name="splitscreen_left";
export const id="dl_681bbc9f059a69fe0361";
export const url=new URL("../icons/splitscreen_left.svg?v=b1597767657ead39467f3048d29ca5b43a91d979b7791b7a1bcf23b75df1e196",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
