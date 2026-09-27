export const name="family_star";
export const id="dl_189f7380f900018ce8f0";
export const url=new URL("../icons/family_star.svg?v=eb01006d3dddf001a2ae475b31a3c09850649bb7d715b047603be37119ccfc6f",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
