export const name="scrollable_header-fill";
export const id="dl_4a97e7accc7ecaf014fe";
export const url=new URL("../icons/scrollable_header-fill.svg?v=40611b125be0cdf352d9cc82ee1a4f5813b8db10b47dfe02ef54dedb3a760bc9",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
