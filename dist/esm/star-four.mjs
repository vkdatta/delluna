export const name="star-four";
export const id="dl_e62173dc99c24e7883d3";
export const url=new URL("../icons/S/star-four.svg?v=877f1c373b81f3eae0909031d73f7a10dfb47f459e3b13f773cf8f5e19c670cd",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
