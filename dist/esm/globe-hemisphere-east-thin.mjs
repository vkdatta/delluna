export const name="globe-hemisphere-east-thin";
export const id="dl_3f0517d76c9845dcac80";
export const url=new URL("../icons/globe-hemisphere-east-thin.svg?v=1d2e075420288f648104bffab126a9dbf89109cc7658391a2250d50184c92893",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
