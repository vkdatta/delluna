export const name="checkbook";
export const id="dl_1db3ae73ac80a094109b";
export const url=new URL("../icons/checkbook.svg?v=ddb04444515739265e06808e16a35850a26682523180757b4d38b95f64243d28",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
