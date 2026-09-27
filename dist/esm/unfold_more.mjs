export const name="unfold_more";
export const id="dl_5ace3c5a762cf71572ce";
export const url=new URL("../icons/unfold_more.svg?v=2d6d6c3d554b1b7fb30e097a5ab1eb87c07295affa88eeb5318f68338db01bf6",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
