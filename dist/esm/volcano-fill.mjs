export const name="volcano-fill";
export const id="dl_bfa2389bfb734eef9145";
export const url=new URL("../icons/V/volcano-fill.svg?v=8e6e9311d664bac425d9989c2d6a6dcd07a9869b0d7dc532c76a352b77d68dc5",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
