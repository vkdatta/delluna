export const name="hide_source-fill";
export const id="dl_443eeed61d4e30a9e413";
export const url=new URL("../icons/hide_source-fill.svg?v=5f5b99f64a00435f7571a329c97755f7118a596261f2df7a555b7753fd559ded",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
