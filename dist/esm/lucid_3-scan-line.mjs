export const name="lucid_3-scan-line";
export const id="dl_7124eea1b2374f99b223";
export const url=new URL("../icons/lucid_3-scan-line.svg?v=5ad98c09f989fad6add6eb994283a3c4fa1f6ba683718e683f6af793cbb969d8",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
