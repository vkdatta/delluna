export const name="arrow-u-up-right";
export const id="dl_502575aeb8164f658f2e";
export const url=new URL("../icons/arrow-u-up-right.svg?v=ec40816e9d976ed82be1a29fbc226a0a1f8381c904c6ec8a9e6048dab7f55928",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
