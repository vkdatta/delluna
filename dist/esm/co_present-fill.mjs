export const name="co_present-fill";
export const id="dl_5263490724dcc0bb1c34";
export const url=new URL("../icons/co_present-fill.svg?v=15981fdacd48516f86f0ee336716900ac952bea2bc5e78ac60c73e20cfffbeb5",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
