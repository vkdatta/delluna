export const name="fit_screen";
export const id="dl_53ae305930b37df27a91";
export const url=new URL("../icons/fit_screen.svg?v=05e8491b550afbfa54fa7bf948dbe2360fe49fcf0a8a7a3167a3a1c3784eb08c",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
