export const name="lucid_1-circle-parking";
export const id="dl_fa4d6847f9b84cf7a36f";
export const url=new URL("../icons/lucid_1-circle-parking.svg?v=68292bffd05f33afde29792a55a50d6af2e719e7c949fec701e7e754b5e1ec84",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
