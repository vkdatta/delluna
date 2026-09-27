export const name="projector-screen-chart-fill";
export const id="dl_f959ead6671e4f54bdc5";
export const url=new URL("../icons/projector-screen-chart-fill.svg?v=c906c96ffa95beed2941e277e9f256e40af91e8c21efa21fc73f1d0f3e17a226",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
