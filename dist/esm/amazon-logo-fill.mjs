export const name="amazon-logo-fill";
export const id="dl_11f04a49cfaf4215b900";
export const url=new URL("../icons/amazon-logo-fill.svg?v=3502d759b15e7d855b3bac7a430300166eac05782c038a8c8551fada3edaefc0",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
