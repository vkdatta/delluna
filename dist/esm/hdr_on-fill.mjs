export const name="hdr_on-fill";
export const id="dl_c1ad0cdf092d280252a4";
export const url=new URL("../icons/hdr_on-fill.svg?v=3926694a7514b3ac3051b35d485585c3b93b3976e0a99b27c4e1cff48c261e10",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
