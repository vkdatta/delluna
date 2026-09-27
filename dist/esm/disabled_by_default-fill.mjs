export const name="disabled_by_default-fill";
export const id="dl_fbd063f938830275c44c";
export const url=new URL("../icons/disabled_by_default-fill.svg?v=7ab0539c4a2a1108a55a1b85e4b43b0356825bd1b7736155caaa40650ce70db3",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
