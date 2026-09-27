export const name="filter_retrolux";
export const id="dl_f1cfbe57a407072c642e";
export const url=new URL("../icons/filter_retrolux.svg?v=3fd7c8c69d6dace039fca6cbb7bb0e66952236f77fd7ce2a3d75e64c9ff682ec",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
