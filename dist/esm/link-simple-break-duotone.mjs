export const name="link-simple-break-duotone";
export const id="dl_ecb2a4a4cecb407895b8";
export const url=new URL("../icons/link-simple-break-duotone.svg?v=ff14d0bcbcaa6106f541afb6b36a1ec69fc5bbc53d81475a28b7902632f067bb",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
