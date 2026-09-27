export const name="image-square-duotone";
export const id="dl_91781c9a6fe148bb9dbd";
export const url=new URL("../icons/image-square-duotone.svg?v=c99c422fa86b69474dc424c88b2c9223a21ef8cc4b0178086b6a1e661de40e71",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
