export const name="view_week";
export const id="dl_a17463acc62941a73559";
export const url=new URL("../icons/view_week.svg?v=4520116fb724666b4c8148e38cdf91511eef1e975f4af0a8c0d415451283913d",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
