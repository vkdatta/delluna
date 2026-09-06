export const name="image-broken";
export const id="dl_0493671b4a9545e294ed";
export const url=new URL("../icons/image-broken.svg?v=b0d7a18d3693f33944a4ecaab73b886b09dbcfe1456470f3081f86073b900d49",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
