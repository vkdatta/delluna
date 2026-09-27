export const name="star-four-fill";
export const id="dl_178e2f33a4e466c9d94a";
export const url=new URL("../icons/star-four-fill.svg?v=f9bd3162240142becf8de06396cb4e91277543391bd4eae85bfd8bdbf648985b",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
