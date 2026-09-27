export const name="lucid_1-arrow-up-right";
export const id="dl_6989f0145a8c4fbc94a9";
export const url=new URL("../icons/lucid_1-arrow-up-right.svg?v=e66dd8d84546ddb282050e6230eab5973f548a10cbd9c4c0653e1daf2a377d1d",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
