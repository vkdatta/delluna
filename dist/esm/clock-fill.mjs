export const name="clock-fill";
export const id="dl_a366325497464c7eba43";
export const url=new URL("../icons/clock-fill.svg?v=4abe98cfc61350de60baf70ce93e85b3a9acbb80e34f9cf19688661aaddbc140",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
