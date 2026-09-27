export const name="lucid_1-circle-arrow-out-down-right";
export const id="dl_2f01ba5af260463d892f";
export const url=new URL("../icons/lucid_1-circle-arrow-out-down-right.svg?v=b0d67c8e361e0715a3b74cab94938909c7276d915f7a25872023a293b892c724",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
