export const name="water_voc-fill";
export const id="dl_70ce118380bda21cfc91";
export const url=new URL("../icons/water_voc-fill.svg?v=5af7558034f838959364f6881f4e825683afcbfdb136f3793b58c06fa7937afd",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
