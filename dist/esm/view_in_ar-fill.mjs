export const name="view_in_ar-fill";
export const id="dl_0eebe9f55f8c40448427";
export const url=new URL("../icons/V/view_in_ar-fill.svg?v=03c598b6f2812b13a628b8917db72a8f06baaa880ea117a220489abd598d8f07",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
