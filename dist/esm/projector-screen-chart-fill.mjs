export const name="projector-screen-chart-fill";
export const id="dl_f959ead6671e4f54bdc5";
export const url=new URL("../icons/projector-screen-chart-fill.svg?v=61fb3860fedd0aba744d134f78a166c535359ab41998963546e500225d9800b2",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
