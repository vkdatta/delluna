export const name="grid_guides-fill";
export const id="dl_50d35b650bf7d1043e60";
export const url=new URL("../icons/grid_guides-fill.svg?v=1f2533637f0a097f76ebf2bbc1c7b5729a24ded9d5fbd1adbe67dc032e87e7b9",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
