export const name="file-plus-light";
export const id="dl_e42952988b7e4abcb626";
export const url=new URL("../icons/file-plus-light.svg?v=7d1e9c2a4c6f2d138ce3643fa0cd14284620c0de1d2bad0052edd514e5e8d3c5",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
