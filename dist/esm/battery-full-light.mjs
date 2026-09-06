export const name="battery-full-light";
export const id="dl_1fa4ab1a91f0429586ed";
export const url=new URL("../icons/battery-full-light.svg?v=5fcb870c1fa0fc9101febb45baf4d65ba55c1dd6b37180d12a59d3b18daf4244",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
