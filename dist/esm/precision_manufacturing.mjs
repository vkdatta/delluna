export const name="precision_manufacturing";
export const id="dl_df07a567a4b54c559877";
export const url=new URL("../icons/P/precision_manufacturing.svg?v=d8b5da136513e0f318d9afce08af13f5ed4df2e8c151f6959ed06b5a64cf9995",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
