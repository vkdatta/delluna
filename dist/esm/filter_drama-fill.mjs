export const name="filter_drama-fill";
export const id="dl_80c06ea1cc414abd9dae";
export const url=new URL("../icons/filter_drama-fill.svg?v=1057412e8ac748402b16339c5ca7b65e68e6de0f1a7ef8bdaed626734cd89c33",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
