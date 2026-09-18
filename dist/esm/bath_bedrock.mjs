export const name="bath_bedrock";
export const id="dl_3ca37e5a9c484bb889ee";
export const url=new URL("../icons/bath_bedrock.svg?v=e275f30c5bc587c6cdbb627033afc0b79b958a8eac30056c5c81a0b7464d7cdf",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
