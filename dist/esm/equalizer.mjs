export const name="equalizer";
export const id="dl_358bc9a91a1345528fc2";
export const url=new URL("../icons/equalizer.svg?v=5387cf9d57b4a9f42f5f6646042aea8c5995a6be15d0e1269720efcf7b3941d9",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
