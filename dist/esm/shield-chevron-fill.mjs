export const name="shield-chevron-fill";
export const id="dl_435bb22093537b9490ad";
export const url=new URL("../icons/shield-chevron-fill.svg?v=a05e52647c631f31116720d8d371a3e9c6e537f6428e285d74e5ad059c400aef",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
