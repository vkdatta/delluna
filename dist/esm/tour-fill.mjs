export const name="tour-fill";
export const id="dl_733395a1e4e74f7baff3";
export const url=new URL("../icons/T/tour-fill.svg?v=7b893a77ebf3c68f41e2b9f885a0b092c7657b93a27260f77cde6ae0831fa73f",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
