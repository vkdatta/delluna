export const name="prohibit-inset-thin";
export const id="dl_62084d7bb97f4aa9bcea";
export const url=new URL("../icons/prohibit-inset-thin.svg?v=72fda9c34cac486e940fe0ee8571616fba499015d033c25943b0d634181cd403",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
