export const name="nightlight";
export const id="dl_aebec3f72b52c9da92bd";
export const url=new URL("../icons/nightlight.svg?v=b840e01bcacd1257609b1551f655c3a4774630a934c5d3dcc8038c50d32c6e98",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
