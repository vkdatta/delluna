export const name="imagesearch_roller";
export const id="dl_4068414645810cdf3687";
export const url=new URL("../icons/imagesearch_roller.svg?v=a3ee5e85fca24f6016719c3d039b65f081f95312f93185d92d93097b2f87885e",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
