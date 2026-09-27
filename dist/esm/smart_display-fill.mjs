export const name="smart_display-fill";
export const id="dl_7ccbb1cfba1c347d3fa7";
export const url=new URL("../icons/smart_display-fill.svg?v=07039025bceb715923a28201664e0e00f21e47cf62ced9fd7de6f034b3e31d81",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
