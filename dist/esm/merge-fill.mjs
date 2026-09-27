export const name="merge-fill";
export const id="dl_2d3335c381bfe20314e7";
export const url=new URL("../icons/merge-fill.svg?v=e69c6b3ee8e329f14b95c706aa995ec2f8d851219e2e4828016eefd4485c8a17",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
