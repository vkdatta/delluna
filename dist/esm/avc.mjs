export const name="avc";
export const id="dl_22bac36972364442aa58";
export const url=new URL("../icons/A/avc.svg?v=15db87cfd041f2f52251fc08c22c8b4940ed706338044d8e4634b7db075daee5",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
