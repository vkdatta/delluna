export const name="screenshot_region-fill";
export const id="dl_c16477336f5790ed7cb7";
export const url=new URL("../icons/screenshot_region-fill.svg?v=0bd08386abb22bd464d9989590aaf4f609d6e543d6472ae53c64d9deb9fe57be",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
