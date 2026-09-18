export const name="tilt_arrow_down-fill";
export const id="dl_6abc5b14cbc1442f93f2";
export const url=new URL("../icons/tilt_arrow_down-fill.svg?v=e593b6e2d24e23001745f264b8a764ef4313fe961a80c18152269532de7a9e2f",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
