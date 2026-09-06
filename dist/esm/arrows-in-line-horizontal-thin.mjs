export const name="arrows-in-line-horizontal-thin";
export const id="dl_5ca167d75b344ceb9bd3";
export const url=new URL("../icons/arrows-in-line-horizontal-thin.svg?v=db6fda794fa7033a3a5287e8342ff1e02dc4bca38e1f5c430f099a83f589c33d",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
