export const name="campfire-light";
export const id="dl_bcf6ba04f9af430089a6";
export const url=new URL("../icons/campfire-light.svg?v=04da4b85aa34b7f86d9cbc47d3f4546bf217aa635cb1ca9aec4f317b88fc0a62",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
