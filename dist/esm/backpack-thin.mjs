export const name="backpack-thin";
export const id="dl_5dfb3f934d7d4433abab";
export const url=new URL("../icons/backpack-thin.svg?v=6447977876ee0e4438976cfcc3bbb10033834e128b9ba71913b0bd0ebb979772",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
