export const name="rainy-fill";
export const id="dl_455d873eb1ae3960a61b";
export const url=new URL("../icons/rainy-fill.svg?v=17582af8efe13cdfde1faf6d8b6124c7fcbe63ddb52929c11706562988d3241b",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
