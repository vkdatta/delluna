export const name="bar_chart-fill";
export const id="dl_273c6d779f1af2df905b";
export const url=new URL("../icons/bar_chart-fill.svg?v=bfb14dcdc4be5e23b676abd25a428aa2945378f955d4f70ab76d986df07bd20d",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
