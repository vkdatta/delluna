export const name="mask-sad-thin";
export const id="dl_a70a322240ba48c7936b";
export const url=new URL("../icons/mask-sad-thin.svg?v=17bc3490223f1293bf1bb89c7b473d634072226cd45f072bcb51de8b76d50b20",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
