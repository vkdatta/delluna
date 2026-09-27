export const name="biohazard-duotone";
export const id="dl_2d905628890a47e7b0e8";
export const url=new URL("../icons/biohazard-duotone.svg?v=8b3f9d64fd26a458f3a8f7e98b5c4805c2e0f0a59eab3de142c567589e9015d9",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
