export const name="13mp-fill";
export const id="dl_bafeab2c200f3ca94d6b";
export const url=new URL("../icons/13mp-fill.svg?v=6196c29c546a26f096dc253fdf32080a7a208e935997663f832df91fdffcf462",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
