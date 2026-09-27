export const name="foot_bones-fill";
export const id="dl_2312640e590a90794d13";
export const url=new URL("../icons/foot_bones-fill.svg?v=e4338836800986d1d0987f3d31dbbe1a25e4dca3d0de62d70948b4c479e88b6f",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
