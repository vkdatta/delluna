export const name="info-light";
export const id="dl_10b85caa0b3647088b62";
export const url=new URL("../icons/info-light.svg?v=c57885e282dd796185bd330356a96cd2090313b3bedafaf41f97dd304df9c87c",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
