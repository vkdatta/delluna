export const name="info-light";
export const id="dl_10b85caa0b3647088b62";
export const url=new URL("../icons/info-light.svg?v=dbb17d2406bf42c78315bbf733f8c03dd875e865ca913aab418fce7c7964409d",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
