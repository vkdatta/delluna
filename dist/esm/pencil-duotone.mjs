export const name="pencil-duotone";
export const id="dl_980d334e7f1649669721";
export const url=new URL("../icons/pencil-duotone.svg?v=6395e0f09d4c22dd5882a0a8561c179e04106cf2e4659e860400abf4078f909e",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
