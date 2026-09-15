export const name="filter_retrolux";
export const id="dl_7a5b939a22964e15aafc";
export const url=new URL("../icons/F/filter_retrolux.svg?v=07dd8ae8715f427279a405321899303d86f78e1d6225e4bf3c3827a0ef85c6d0",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
