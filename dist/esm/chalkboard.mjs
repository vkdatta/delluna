export const name="chalkboard";
export const id="dl_30acef9aed3248139e71";
export const url=new URL("../icons/chalkboard.svg?v=4ece1b6ad3a0e5c8559bbf3c3efb977a6944dc7238f97dba1d69e7bf4f232f29",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
