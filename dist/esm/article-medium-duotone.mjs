export const name="article-medium-duotone";
export const id="dl_6e22716310ca4a77a037";
export const url=new URL("../icons/article-medium-duotone.svg?v=083c390decfa98087a081361d5c692495bdfbcdc49160fb00d5791eb5b7385b3",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
