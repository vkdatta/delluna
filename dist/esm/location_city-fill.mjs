export const name="location_city-fill";
export const id="dl_6ecba11a54e3db293f9f";
export const url=new URL("../icons/location_city-fill.svg?v=e7ca9fd7057a8bce62a8655464d4438a3ddeeda8d5142a74e41ca045374eaeb4",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
