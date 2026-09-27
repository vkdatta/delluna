export const name="bar_chart-fill";
export const id="dl_91fa994cd879fbbe9106";
export const url=new URL("../icons/bar_chart-fill.svg?v=39978a1d8ffb947ccf7482294656bc54b0feecf3313e4141a4bdeb7eb334b777",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
