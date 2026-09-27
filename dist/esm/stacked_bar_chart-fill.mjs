export const name="stacked_bar_chart-fill";
export const id="dl_b1102658151c88c1958a";
export const url=new URL("../icons/stacked_bar_chart-fill.svg?v=8e9f472072b441e13f1f91ce938f197241a64ebbdf5780509c17d4a26f287165",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
