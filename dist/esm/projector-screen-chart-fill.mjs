export const name="projector-screen-chart-fill";
export const id="dl_f959ead6671e4f54bdc5";
export const url=new URL("../icons/projector-screen-chart-fill.svg?v=7f6440f884632986128ab37a7d55b56796b31b89147bb528285fb2967a2c429c",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
