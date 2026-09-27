export const name="readiness_score-fill";
export const id="dl_2953c20839fb95c7a385";
export const url=new URL("../icons/readiness_score-fill.svg?v=88d130888e1a7aa5500e8c201cecba5a0520c40d5ab63f5853343a9b220862dc",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
