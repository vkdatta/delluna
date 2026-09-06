export const name="folders-thin";
export const id="dl_a4079b3a2a744ed48de1";
export const url=new URL("../icons/folders-thin.svg?v=ffaffb3cf2231b3a434609c28494df0358403469e2520864ee32c48b876afb9d",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
