export const name="biohazard-duotone";
export const id="dl_2d905628890a47e7b0e8";
export const url=new URL("../icons/biohazard-duotone.svg?v=836855baf6fb762b3f9ccd481136cb1fc05159cbe34deadb1c6b607d4b8bb13c",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
