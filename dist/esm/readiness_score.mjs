export const name="readiness_score";
export const id="dl_fb0986da8788c0a0f409";
export const url=new URL("../icons/readiness_score.svg?v=b0cc98a466930aa10b7c66348021fce0dcf2566760b161e6739509458ad789a6",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
