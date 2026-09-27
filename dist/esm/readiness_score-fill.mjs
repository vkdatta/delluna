export const name="readiness_score-fill";
export const id="dl_b193c9bffcee4cb01dd3";
export const url=new URL("../icons/readiness_score-fill.svg?v=be20a901f30ac092ed4fe18bff8fe93d82af840d5439a4453a3c2d5e20f99805",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
