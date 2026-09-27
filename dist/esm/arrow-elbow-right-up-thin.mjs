export const name="arrow-elbow-right-up-thin";
export const id="dl_b9970133c5064d04a376";
export const url=new URL("../icons/arrow-elbow-right-up-thin.svg?v=495a48dbafe8bfbbb3f0d79f25f4ef2cfb913785c631e918dc96affecdd5553d",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
