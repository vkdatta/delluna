export const name="markdown-logo-light";
export const id="dl_d76692edf5af4eb8812c";
export const url=new URL("../icons/markdown-logo-light.svg?v=30e68b3eac310ec4d7c1d0525bd21ec546a77c62d409f631ef3cd97ac40b65a1",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
