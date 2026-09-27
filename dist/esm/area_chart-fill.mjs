export const name="area_chart-fill";
export const id="dl_941861c579161757a59b";
export const url=new URL("../icons/area_chart-fill.svg?v=77c1cc8c1b397f13dd1171749fcf61fae2ae3ace64080286887c519311e64623",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
