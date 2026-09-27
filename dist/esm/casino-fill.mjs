export const name="casino-fill";
export const id="dl_b3763970ef2e5a1522bd";
export const url=new URL("../icons/casino-fill.svg?v=b5846b83429b7f9a32146bf7f973de8e7c4c261aa3e2e41ec2398e8e05441402",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
