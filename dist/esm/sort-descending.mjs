export const name="sort-descending";
export const id="dl_f087ad859ca3f2b187f2";
export const url=new URL("../icons/sort-descending.svg?v=e5811818dd2cd343370c7679d601546d232e837a7e76d0343d4ff33aa490e1ba",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
