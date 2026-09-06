export const name="calendar-dot-bold";
export const id="dl_fb6bf2ec06424d3f88ef";
export const url=new URL("../icons/calendar-dot-bold.svg?v=7a5d1fec5934dc5f050c396c07673e0a32885261e16c4cddacb220293d04d522",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
