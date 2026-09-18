export const name="thermometer_add-fill";
export const id="dl_4b86a9c3c94c4733ba05";
export const url=new URL("../icons/T/thermometer_add-fill.svg?v=356a02a4051913eb2914a8797560f123a9628fa4921e9d121900d3ce86ba71df",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
