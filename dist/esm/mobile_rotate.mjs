export const name="mobile_rotate";
export const id="dl_96bc321313006718c7e8";
export const url=new URL("../icons/mobile_rotate.svg?v=f7038920c9bd0ff19ed39a8bcc3bb2f0e4b8c9d0dce6e00d5ffe61a82b856818",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
