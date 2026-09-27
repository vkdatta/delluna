export const name="drop-simple-light";
export const id="dl_cd2c83d1c0864320a188";
export const url=new URL("../icons/drop-simple-light.svg?v=0d57732ff02b0f18e075bbbbdffa9980ac1815c9ac353b8a92917320113cfd4c",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
