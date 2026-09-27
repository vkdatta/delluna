export const name="clear_day";
export const id="dl_b9082bd4b6d9a432c24c";
export const url=new URL("../icons/clear_day.svg?v=6752323bbfdebc2b9bdb69a00024c8ea4cfa3a569da6b8e269e4556c5f48e535",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
