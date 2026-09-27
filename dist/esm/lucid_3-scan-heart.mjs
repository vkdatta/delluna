export const name="lucid_3-scan-heart";
export const id="dl_6b5e635b6b1740ad9973";
export const url=new URL("../icons/lucid_3-scan-heart.svg?v=cd1ea6fbdc14209ef9816790e4da90bb5aeba2cf79153990bb2bb03de7bb0124",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
