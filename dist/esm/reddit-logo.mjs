export const name="reddit-logo";
export const id="dl_b3738f8ec6584a91b269";
export const url=new URL("../icons/reddit-logo.svg?v=1dff9a7fe156cf27f447432bbe8c9af72b8c8ea9e0d8aefa7490159b5d862b03",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
