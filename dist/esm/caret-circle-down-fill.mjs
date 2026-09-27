export const name="caret-circle-down-fill";
export const id="dl_446ae3ea25bc45c1b568";
export const url=new URL("../icons/caret-circle-down-fill.svg?v=fa59afbd4db962fd81db81f72aa3023eac291dbb96e5a483e6fa122991213599",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
