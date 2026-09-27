export const name="moon_stars";
export const id="dl_347f95d42e18cf88dade";
export const url=new URL("../icons/moon_stars.svg?v=2f948080a7e3d3882fa1385596f724cdc3f879b6a2634d5c9aed27eaa7fb83de",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
