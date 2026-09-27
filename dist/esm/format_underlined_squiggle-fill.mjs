export const name="format_underlined_squiggle-fill";
export const id="dl_dab0f2e1aa00121ae657";
export const url=new URL("../icons/format_underlined_squiggle-fill.svg?v=20a16d2f10a3090b16731b4c7b58f8502ef2d37564b32a506fea7c608b09cd04",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
