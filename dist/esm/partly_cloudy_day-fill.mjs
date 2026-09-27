export const name="partly_cloudy_day-fill";
export const id="dl_84e5191abb285c0ee694";
export const url=new URL("../icons/partly_cloudy_day-fill.svg?v=511704322cf19d72ab7c28d79290e72ed39b79ba2803535e8d01cc4efe0d5020",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
