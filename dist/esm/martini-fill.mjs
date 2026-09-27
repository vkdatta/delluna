export const name="martini-fill";
export const id="dl_4f89b83ae8724f79b7a7";
export const url=new URL("../icons/martini-fill.svg?v=1b866950db00faeff47a8081d6385132f2fbcf17eeaa09889f2ca4cb49d66928",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
