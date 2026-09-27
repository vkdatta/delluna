export const name="lucid_1-circle-arrow-out-down-right";
export const id="dl_2f01ba5af260463d892f";
export const url=new URL("../icons/lucid_1-circle-arrow-out-down-right.svg?v=f0a5a8a9f5a02553e1fab152ad926aa981246fdc53320d1760f04c88ccf29748",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
