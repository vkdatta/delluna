export const name="youtube_searched_for-fill";
export const id="dl_5bbf124faf72fce9a7ea";
export const url=new URL("../icons/youtube_searched_for-fill.svg?v=5f0efc50a22267854d746470434c4908c622248e83b08a3b0d591649f98dda51",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
