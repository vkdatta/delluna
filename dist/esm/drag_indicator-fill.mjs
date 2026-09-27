export const name="drag_indicator-fill";
export const id="dl_5353a4f124c0089e03db";
export const url=new URL("../icons/drag_indicator-fill.svg?v=d2b906a956dd30e977a00828eabbf8b6d79ebe20001ab706e8240c80779cb0d0",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
