export const name="resize-light";
export const id="dl_129d65546c8a4ed5af19";
export const url=new URL("../icons/resize-light.svg?v=68cdf3f57975f6a8a8e5dc3ee90b9f4703c84e3bf5b97c88811a9827f6d61685",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
