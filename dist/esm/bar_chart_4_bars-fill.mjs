export const name="bar_chart_4_bars-fill";
export const id="dl_2565c768d2da4d3eb804";
export const url=new URL("../icons/bar_chart_4_bars-fill.svg?v=679a0f26d801b60c9bf97ef08e11b1afe9d7d023abd63099b45130ca8275bc1a",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
