export const name="self_improvement";
export const id="dl_fa9621814f8143d299ee";
export const url=new URL("../icons/self_improvement.svg?v=7daa2dff3779eea9e8ed1770f81ebfaf010a5ea3f56db91d4473151d65774e2d",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
