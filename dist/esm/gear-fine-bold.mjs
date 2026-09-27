export const name="gear-fine-bold";
export const id="dl_b83e2876551f4a4484af";
export const url=new URL("../icons/gear-fine-bold.svg?v=13896f655d667637dd21b014f4c4373c0288023fe2eff6b217a0bb3efb707de8",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
