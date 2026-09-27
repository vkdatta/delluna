export const name="scale";
export const id="dl_50eb2a4b841b3c5b3974";
export const url=new URL("../icons/scale.svg?v=f386fe7d557d0d03e3a63169554b2988f16be9e03a63a1f582eef20aeb6f5819",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
