export const name="scan-light";
export const id="dl_c7f61503988151e58eaa";
export const url=new URL("../icons/scan-light.svg?v=425bfa67b583c16403f9e77640baf9008d1a5a5669c8f269de687613c6d9cffd",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
