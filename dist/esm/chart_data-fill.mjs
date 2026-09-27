export const name="chart_data-fill";
export const id="dl_8501fc79c25f9c49d34b";
export const url=new URL("../icons/chart_data-fill.svg?v=1e2102d24b30ba7c701d248fd90c4ab02d83f354b3f29adc7ff69bb11f3b032e",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
