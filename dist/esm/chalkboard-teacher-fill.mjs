export const name="chalkboard-teacher-fill";
export const id="dl_e70b9767cf7d499eac9e";
export const url=new URL("../icons/chalkboard-teacher-fill.svg?v=b06d8375702193e0d860e7a487b948f8fcdfe7bd1f05460d53f2d6c854f0cccc",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
