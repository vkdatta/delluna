export const name="speed_0_5x-fill";
export const id="dl_c35d3f59bf943a699b02";
export const url=new URL("../icons/speed_0_5x-fill.svg?v=2d1c6440c27d259938e553c45f198c0377f8993af06999c2cbf9fffbf967fd25",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
